const CryptoJS = require("crypto-js");

const encryptBase64 = (str) => {
  const wordArray = CryptoJS.enc.Utf8.parse(str);
  const base64 = CryptoJS.enc.Base64.stringify(wordArray);
  return base64;
};

const decryptBase64 = (value) => {
  const parsedWordArray = CryptoJS.enc.Base64.parse(value);
  const parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  return parsedStr;
};

const encodevalue = encryptBase64("https://baidu.com");

const decodeValue = decryptBase64(encodevalue);

console.log("base64加密", encodevalue);

console.log("base64解密", decodeValue);
