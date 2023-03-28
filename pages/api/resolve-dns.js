// pages/api/resolve-dns.js
import dns from "dns";

export default async function handler(req, res) {
  const domain = req.query.domain;

  if (!domain) {
    res.status(400).json({ error: "Domain query parameter is missing." });
    return;
  }

  try {
    const addresses = await dns.promises.resolve(domain);
    res.status(200).json({ domain, addresses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
