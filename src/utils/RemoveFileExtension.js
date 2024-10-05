// utils.js

/**
 * Elimina la extensión del nombre del archivo.
 * @param {string} fileName - El nombre del archivo con extensión.
 * @returns {string} - El nombre del archivo sin extensión.
 */
export const removeFileExtension = (fileName) => {
    return fileName.replace(/\.[^/.]+$/, "");
  };