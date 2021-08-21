export async function generateKey() {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );

  return keyPair;
}

export async function encryptMessage(publicKey, text) {
  let encoded = new TextEncoder().encode(text);
  const chiperText = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    encoded
  );

  return chiperText;
}

export async function decryptMessage(privateKey, chiperText) {
  const decryption = await window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP",
    },
    privateKey,
    chiperText
  );

  const plain = new TextDecoder().decode(decryption);
  return plain;
}
