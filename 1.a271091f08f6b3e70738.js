(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+yoj":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var n=t("9lTW"),i=t("mhLr"),f=t("uq5U"),o=t("vIY1"),a=t("OLPe"),u=t("dI7W");r.zeroAddress=function(){var e=a.zeros(20);return a.bufferToHex(e)},r.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},r.isZeroAddress=function(e){return r.zeroAddress()===a.addHexPrefix(e)},r.toChecksumAddress=function(e,r){e=i.stripHexPrefix(e).toLowerCase();for(var t=void 0!==r?r.toString()+"0x":"",n=u.keccak(t+e).toString("hex"),f="0x",o=0;o<e.length;o++)parseInt(n[o],16)>=8?f+=e[o].toUpperCase():f+=e[o];return f},r.isValidChecksumAddress=function(e,t){return r.isValidAddress(e)&&r.toChecksumAddress(e,t)===e},r.generateAddress=function(r,t){r=a.toBuffer(r);var n=new o(t);return n.isZero()?u.rlphash([r,null]).slice(-20):u.rlphash([r,e.from(n.toArray())]).slice(-20)},r.generateAddress2=function(r,t,i){var f=a.toBuffer(r),o=a.toBuffer(t),c=a.toBuffer(i);return n(20===f.length),n(32===o.length),u.keccak256(e.concat([e.from("ff","hex"),f,o,u.keccak256(c)])).slice(-20)},r.isPrecompiled=function(e){var r=a.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},r.isValidPrivate=function(e){return f.privateKeyVerify(e)},r.isValidPublic=function(r,t){return void 0===t&&(t=!1),64===r.length?f.publicKeyVerify(e.concat([e.from([4]),r])):!!t&&f.publicKeyVerify(r)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=a.toBuffer(e),r&&64!==e.length&&(e=f.publicKeyConvert(e,!1).slice(1)),n(64===e.length),u.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=a.toBuffer(e),f.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=a.toBuffer(e)).length&&(e=f.publicKeyConvert(e,!1).slice(1)),e}}).call(this,t("tjlA").Buffer)},CJ0B:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var t=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(r,i,f){void 0===f&&(f=!0);var o=e.from(f?t:n);return r.copy(o,f?8:9),i.copy(o,f?181:214),o},r.privateKeyImport=function(e){var r=e.length,t=0;if(r<t+1||48!==e[t])return null;if(r<(t+=1)+1||!(128&e[t]))return null;var n=127&e[t];if(n<1||n>2)return null;if(r<(t+=1)+n)return null;var i=e[t+n-1]|(n>1?e[t+n-2]<<8:0);return r<(t+=n)+i||r<t+3||2!==e[t]||1!==e[t+1]||1!==e[t+2]||r<(t+=3)+2||4!==e[t]||e[t+1]>32||r<t+2+e[t+1]?null:e.slice(t+2,t+2+e[t+1])},r.signatureImportLax=function(r){var t=e.alloc(32,0),n=e.alloc(32,0),i=r.length,f=0;if(48!==r[f++])return null;var o=r[f++];if(128&o&&(f+=o-128)>i)return null;if(2!==r[f++])return null;var a=r[f++];if(128&a){if(f+(o=a-128)>i)return null;for(;o>0&&0===r[f];f+=1,o-=1);for(a=0;o>0;f+=1,o-=1)a=(a<<8)+r[f]}if(a>i-f)return null;var u=f;if(f+=a,2!==r[f++])return null;var c=r[f++];if(128&c){if(f+(o=c-128)>i)return null;for(;o>0&&0===r[f];f+=1,o-=1);for(c=0;o>0;f+=1,o-=1)c=(c<<8)+r[f]}if(c>i-f)return null;var s=f;for(f+=c;a>0&&0===r[u];a-=1,u+=1);if(a>32)return null;var l=r.slice(u,u+a);for(l.copy(t,32-l.length);c>0&&0===r[s];c-=1,s+=1);if(c>32)return null;var d=r.slice(s,s+c);return d.copy(n,32-d.length),{r:t,s:n}}}).call(this,t("tjlA").Buffer)},OLPe:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var n=t("mhLr"),i=t("vIY1");r.zeros=function(r){return e.allocUnsafe(r).fill(0)},r.setLengthLeft=function(e,t,n){void 0===n&&(n=!1);var i=r.zeros(t);return e=r.toBuffer(e),n?e.length<t?(e.copy(i),i):e.slice(0,t):e.length<t?(e.copy(i,t-e.length),i):e.slice(-t)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,t){return r.setLength(e,t,!0)},r.unpad=function(e){for(var r=(e=n.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},r.stripZeros=r.unpad,r.toBuffer=function(r){if(!e.isBuffer(r))if(Array.isArray(r))r=e.from(r);else if("string"==typeof r){if(!n.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=e.from(n.padToEven(n.stripHexPrefix(r)),"hex")}else if("number"==typeof r)r=n.intToBuffer(r);else if(null==r)r=e.allocUnsafe(0);else if(i.isBN(r))r=r.toArrayLike(e);else{if(!r.toArray)throw new Error("invalid type");r=e.from(r.toArray())}return r},r.bufferToInt=function(e){return new i(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new i(e).fromTwos(256)},r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!=typeof e||n.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(t){if(e.isBuffer(t))return"0x"+t.toString("hex");if(t instanceof Array){for(var n=[],i=0;i<t.length;i++)n.push(r.baToJSON(t[i]));return n}}}).call(this,t("tjlA").Buffer)},PdBc:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var n=t("9lTW"),i=t("mhLr"),f=t("o8pB"),o=t("OLPe");r.defineProperties=function(r,t,a){if(r.raw=[],r._fields=[],r.toJSON=function(e){if(void 0===e&&(e=!1),e){var t={};return r._fields.forEach(function(e){t[e]="0x"+r[e].toString("hex")}),t}return o.baToJSON(r.raw)},r.serialize=function(){return f.encode(r.raw)},t.forEach(function(t,i){function f(){return r.raw[i]}function a(f){"00"!==(f=o.toBuffer(f)).toString("hex")||t.allowZero||(f=e.allocUnsafe(0)),t.allowLess&&t.length?(f=o.stripZeros(f),n(t.length>=f.length,"The field "+t.name+" must not have more "+t.length+" bytes")):t.allowZero&&0===f.length||!t.length||n(t.length===f.length,"The field "+t.name+" must have byte length of "+t.length),r.raw[i]=f}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:f,set:a}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:a,get:f})}),a)if("string"==typeof a&&(a=e.from(i.stripHexPrefix(a),"hex")),e.isBuffer(a)&&(a=f.decode(a)),Array.isArray(a)){if(a.length>r._fields.length)throw new Error("wrong number of fields in data");a.forEach(function(e,t){r[r._fields[t]]=o.toBuffer(e)})}else{if("object"!=typeof a)throw new Error("invalid data");var u=Object.keys(a);t.forEach(function(e){-1!==u.indexOf(e.name)&&(r[e.name]=a[e.name]),-1!==u.indexOf(e.alias)&&(r[e.alias]=a[e.alias])})}}}).call(this,t("tjlA").Buffer)},"W4v+":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t("uq5U"),i=t("vIY1"),f=t("OLPe"),o=t("dI7W");function a(e,r){return r?e-(2*r+35):e-27}function u(e){return 0===e||1===e}r.ecsign=function(e,r,t){var i=n.sign(e,r),f=i.recovery;return{r:i.signature.slice(0,32),s:i.signature.slice(32,64),v:t?f+(2*t+35):f+27}},r.ecrecover=function(r,t,i,o,c){var s=e.concat([f.setLength(i,32),f.setLength(o,32)],64),l=a(t,c);if(!u(l))throw new Error("Invalid signature v value");var d=n.recover(r,s,l);return n.publicKeyConvert(d,!1).slice(1)},r.toRpcSig=function(r,t,n,i){if(!u(a(r,i)))throw new Error("Invalid signature v value");return f.bufferToHex(e.concat([f.setLengthLeft(t,32),f.setLengthLeft(n,32),f.toBuffer(r)]))},r.fromRpcSig=function(e){var r=f.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var t=r[64];return t<27&&(t+=27),{v:t,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,t,n,f){void 0===n&&(n=!0);var o=new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==t.length)return!1;if(!u(a(e,f)))return!1;var s=new i(r),l=new i(t);return!(s.isZero()||s.gt(c)||l.isZero()||l.gt(c)||n&&1===l.cmp(o))},r.hashPersonalMessage=function(r){var t=e.from("\x19Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return o.keccak(e.concat([t,r]))}}).call(this,t("tjlA").Buffer)},YGO9:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var n=t("vIY1"),i=new(0,t("MzeL").ec)("secp256k1"),f=i.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var t=new n(e);if(t.ucmp(f.n)>=0)throw new Error("couldn't export to DER format");var a=i.g.mul(t);return o(a.getX(),a.getY(),r)},r.privateKeyModInverse=function(r){var t=new n(r);if(t.ucmp(f.n)>=0||t.isZero())throw new Error("private key range is invalid");return t.invm(f.n).toArrayLike(e,"be",32)},r.signatureImport=function(r){var t=new n(r.r);t.ucmp(f.n)>=0&&(t=new n(0));var i=new n(r.s);return i.ucmp(f.n)>=0&&(i=new n(0)),e.concat([t.toArrayLike(e,"be",32),i.toArrayLike(e,"be",32)])},r.ecdhUnsafe=function(e,r,t){void 0===t&&(t=!0);var a=i.keyFromPublic(e),u=new n(r);if(u.ucmp(f.n)>=0||u.isZero())throw new Error("scalar was invalid (zero or overflow)");var c=a.pub.mul(u);return o(c.getX(),c.getY(),t)};var o=function(r,t,n){var i;return n?((i=e.alloc(33))[0]=t.isOdd()?3:2,r.toArrayLike(e,"be",32).copy(i,1)):((i=e.alloc(65))[0]=4,r.toArrayLike(e,"be",32).copy(i,1),t.toArrayLike(e,"be",32).copy(i,33)),i}}).call(this,t("tjlA").Buffer)},Zmks:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var n=t("vIY1");r.MAX_INTEGER=new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new n("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=e.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=e.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=e.from(r.KECCAK256_RLP_S,"hex")}).call(this,t("tjlA").Buffer)},dI7W:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var n=t("wzGL"),i=n.keccak224,f=n.keccak384,o=n.keccak256,a=n.keccak512,u=t("mObS"),c=t("mhLr"),s=t("o8pB"),l=t("OLPe");r.keccak=function(r,t){switch(void 0===t&&(t=256),r="string"!=typeof r||c.isHexString(r)?l.toBuffer(r):e.from(r,"utf8"),t||(t=256),t){case 224:return i(r);case 256:return o(r);case 384:return f(r);case 512:return a(r);default:throw new Error("Invald algorithm: keccak"+t)}},r.keccak256=function(e){return r.keccak(e)},r.sha256=function(e){return e=l.toBuffer(e),u("sha256").update(e).digest()},r.ripemd160=function(e,r){e=l.toBuffer(e);var t=u("rmd160").update(e).digest();return!0===r?l.setLength(t,32):t},r.rlphash=function(e){return r.keccak(s.encode(e))}}).call(this,t("tjlA").Buffer)},kX2E:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||r.hasOwnProperty(t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var f=t("uq5U");r.secp256k1=f;var o=t("mhLr"),a=t("vIY1");r.BN=a;var u=t("o8pB");r.rlp=u,Object.assign(r,o),i(t("Zmks"),r),i(t("+yoj"),r),i(t("dI7W"),r),i(t("W4v+"),r),i(t("OLPe"),r),i(t("PdBc"),r)},uq5U:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var n=t("IhPl"),i=t("YGO9"),f=t("CJ0B");r.privateKeyVerify=function(e){return 32===e.length&&n.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var t=i.privateKeyExport(e,r);return f.privateKeyExport(e,t,r)},r.privateKeyImport=function(e){if(null!==(e=f.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(r){return e.from(n.privateKeyNegate(Uint8Array.from(r)))},r.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return e.from(i.privateKeyModInverse(Uint8Array.from(r)))},r.privateKeyTweakAdd=function(r,t){return e.from(n.privateKeyTweakAdd(Uint8Array.from(r),t))},r.privateKeyTweakMul=function(r,t){return e.from(n.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t)))},r.publicKeyCreate=function(r,t){return e.from(n.publicKeyCreate(Uint8Array.from(r),t))},r.publicKeyConvert=function(r,t){return e.from(n.publicKeyConvert(Uint8Array.from(r),t))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&n.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(r,t,i){return e.from(n.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(t),i))},r.publicKeyTweakMul=function(r,t,i){return e.from(n.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t),i))},r.publicKeyCombine=function(r,t){var i=[];return r.forEach(function(e){i.push(Uint8Array.from(e))}),e.from(n.publicKeyCombine(i,t))},r.signatureNormalize=function(r){return e.from(n.signatureNormalize(Uint8Array.from(r)))},r.signatureExport=function(r){return e.from(n.signatureExport(Uint8Array.from(r)))},r.signatureImport=function(r){return e.from(n.signatureImport(Uint8Array.from(r)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=f.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return i.signatureImport(r)},r.sign=function(r,t,i){if(null===i)throw new TypeError("options should be an Object");var f=void 0;if(i){if(f={},null===i.data)throw new TypeError("options.data should be a Buffer");if(i.data){if(32!=i.data.length)throw new RangeError("options.data length is invalid");f.data=new Uint8Array(i.data)}if(null===i.noncefn)throw new TypeError("options.noncefn should be a Function");i.noncefn&&(f.noncefn=function(r,t,n,f,o){var a=null!=n?e.from(n):null,u=null!=f?e.from(f):null,c=e.from("");return i.noncefn&&(c=i.noncefn(e.from(r),e.from(t),a,u,o)),new Uint8Array(c)})}var o=n.ecdsaSign(Uint8Array.from(r),Uint8Array.from(t),f);return{signature:e.from(o.signature),recovery:o.recid}},r.verify=function(e,r,t){return n.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),t)},r.recover=function(r,t,i,f){return e.from(n.ecdsaRecover(Uint8Array.from(t),i,Uint8Array.from(r),f))},r.ecdh=function(r,t){return e.from(n.ecdh(Uint8Array.from(r),Uint8Array.from(t),{}))},r.ecdhUnsafe=function(r,t,n){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==t.length)throw new RangeError("private key length is invalid");return e.from(i.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(t),n))}}).call(this,t("tjlA").Buffer)}}]);