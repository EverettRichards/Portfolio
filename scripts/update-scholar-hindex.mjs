import fs from "node:fs";
import path from "node:path";

const profileUrl = "https://scholar.google.com/citations?user=iowXMSwAAAAJ&hl=en";
const outputPath = path.resolve("src/generated/scholarMetrics.json");
const fallbackData = { citations: 10, hIndex: 1, lastUpdated: null };

function readExistingValue() {
  try {
    const existing = JSON.parse(fs.readFileSync(outputPath, "utf8"));
    if (typeof existing?.hIndex === "number") {
      return existing;
    }
  } catch {
    // Ignore missing or malformed cache files.
  }

  return fallbackData;
}

function parseHIndex(html) {
  const tableMatch = html.match(/h-index[\s\S]*?<td[^>]*class="gsc_rsb_std"[^>]*>(\d+)<\/td>/i);
  if (tableMatch) {
    return Number(tableMatch[1]);
  }

  const rowMatch = html.match(/<tr[^>]*>\s*<td[^>]*class="gsc_rsb_sth"[^>]*>h-index<\/td>\s*<td[^>]*class="gsc_rsb_std"[^>]*>(\d+)<\/td>/i);
  if (rowMatch) {
    return Number(rowMatch[1]);
  }

  throw new Error("Unable to locate H-index in Google Scholar profile HTML.");
}

function parseCitations(html) {
  const tableMatch = html.match(/Citations[\s\S]*?<td[^>]*class="gsc_rsb_std"[^>]*>(\d+)<\/td>/i);
  if (tableMatch) {
    return Number(tableMatch[1]);
  }

  const rowMatch = html.match(/<tr[^>]*>\s*<td[^>]*class="gsc_rsb_sth"[^>]*>Citations<\/td>\s*<td[^>]*class="gsc_rsb_std"[^>]*>(\d+)<\/td>/i);
  if (rowMatch) {
    return Number(rowMatch[1]);
  }

  throw new Error("Unable to locate total citations in Google Scholar profile HTML.");
}

async function main() {
  const currentData = readExistingValue();

  try {
    const response = await fetch(profileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`Google Scholar responded with ${response.status}`);
    }

    const html = await response.text();
    const citations = parseCitations(html);
    const hIndex = parseHIndex(html);
    const payload = {
      citations,
      hIndex,
      lastUpdated: new Date().toISOString()
    };

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(`Updated citations to ${citations} and H-index to ${hIndex}`);
  } catch (error) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(currentData, null, 2)}\n`);
    console.warn(`Using cached Scholar metrics because refresh failed: ${error.message}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});