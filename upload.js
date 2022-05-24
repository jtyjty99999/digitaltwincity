/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const distPath = path.resolve(__dirname, './docs');
const { uploadDirRecursively } = require('@tencent/cos-bulk-upload');
const { flatten } = require('array-flatten');
const axios = require('axios').default;

const [folderName] = process.argv.splice(2);
async function upload(cdnPath) {
  const res = await uploadDirRecursively(distPath, cdnPath);
  return flatten(res);
}
function refreshCatch(urls) {
  urls.forEach(async (i) => {
    try {
      await axios.get(`${i}?x_cache_fresh=on`);
      console.log(`文件缓存已更新：${i}`);
    } catch (e) {
      console.error(`文件缓存更新失败：${i} ; ${e.message}`);
    }
  });
}
async function exec(cdnPath) {
  const uploadRes = await upload(cdnPath);
  // refresh .html .ico
  const urls = uploadRes.filter((i) => /\.(html|ico)$/.test(i.key)).map((i) => i.url);
  refreshCatch(urls);
}
exec(folderName);
