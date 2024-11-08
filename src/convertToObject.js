'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const styles = sourceString.replaceAll(/[\r\n\s]+/g, '').split(';');

  for (let i = 0; i < styles.length; i++) {
    const properties = styles[i].split(':');

    if (properties[0] !== undefined && properties[1] !== undefined) {
      styleObj[properties[0]] = properties[1];
    }
  }

  return styleObj;
}

module.exports = convertToObject;
