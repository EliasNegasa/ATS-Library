/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { Candidate } from '../common/model.js';

/**
 * Part 2: Duplicate Candidate Detection
 * ------------------------------------------
 *
 * One of the challenges when building an ATS is preventing duplicate entries in the candidate database.
 * We want to prevent scenarios where the same person, knowingly or otherwise, get registered multiple times using different
 * phone numbers or email.
 * This is especially difficult with Ethiopian names where the same name can be written in different ways:
 * - eg: ብርሃኔ = Berhane, Birhane, Birhanie, Birhanne etc
 * - eg: ብስራት = Bisrat, Bsrat, Besrat, Bsrate, Bissrat
 * - eg: አብረሃም = Abreham, Abrham, Abraham, Abriham
 */

/**
 * One strategy for detecting duplicate names is to compare normalized versions of each name.
 * 1. Vowels are often used interchangeably, so we will remove all instances of vowels, ** EXCEPT in the first character **.
 *      eg. Abreham -> Abrhm, Birhanie -> Brhn
 * 2. We will remove double letters. Eg. Bissrat -> Bssrt -> Bsrt
 * 3. We'll remove all non-character letters, eg. spaces, '-' or '/'; Wolde Mariam -> Wld Mrm -> Wldmrm
 * 3. we'll make all characters uppercase. Abreham -> Abrhm -> ABRHM
 *
 * This function returns a normalized version of the given string, according to the
 * above rules.
 *
 * @param {String} name
 * @returns String
 */
const normalizedName = (name) => {
  // ----- Challenge 2.2.1 - Complete the function here ---- //

  // Elias => [E, L, I, A, S] => [E, L, S,] => ELS
  const nameArray = name.toUpperCase().split('');
  const normalizedNameArray = [];

  for (let i = 0; i < nameArray.length; i++) {
    if (isNaN(nameArray[i]) && isLetter(nameArray[i])) {
      if ((isVowel(nameArray[i]) && i === 0) || !isVowel(nameArray[i])) {
        if (
          normalizedNameArray[normalizedNameArray.length - 1] !== nameArray[i]
        ) {
          normalizedNameArray.push(nameArray[i]);
        }
      }
    }
  }

  const normalizedName = normalizedNameArray.join('');

  return normalizedName;
};

const isVowel = (letter) => {
  return ['A', 'E', 'I', 'O', 'U'].includes(letter);
};

const isLetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

/**
 * This function compares two candidates and returns true if all of the following are true:
 * - the candidates' normalized names are identical
 * - their dates of birth have no more than 10 days difference.
 *
 * @param {Candidate} candidate1
 * @param {Candidate} candidate2
 * @returns true or false
 */
const areSimilarCandidates = (candidate1, candidate2) => {
  // ----- Challenge 2.2.2 - Complete the function here ---- //

  if (normalizedName(candidate1.name) === normalizedName(candidate2.name)) {
    if (daysDifference(candidate1.dateOfBirth, candidate2.dateOfBirth) <= 10) {
      return true;
    }
  }
  return false;
};

const daysDifference = (date1, date2) => {
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const timeDifference = Math.abs(date2 - date1);

  return Math.floor(timeDifference / millisecondsInADay);
};

/**
 * Given a candidate, return possible duplicates of this candidate
 * in the given candidateList.
 *
 * @param {Candidate} newCandidate
 * @param {Array<Candidate>} candidateList
 */
const possibleDuplicates = (newCandidate, candidateList) => {
  // ------ Challenge 2.2.3 - Complete the function here ---- //

  const possibleDuplicateCandidates = [];

  for (const candidate of candidateList) {
    if (areSimilarCandidates(candidate, newCandidate)) {
      possibleDuplicateCandidates.push(candidate);
    }
  }
  return possibleDuplicateCandidates;
};

/**
 * We want to transform the given candidate list into a dictionary index
 * that enable us to lookup a normalized name and get all the corresponding candidates.
 * A sample output may be:
 * { 'ABRHM' -> [ Candidate {name: 'Abraham', ...},
 *                Candidate {name: 'Abreham', ...},
 *              ],
 *   'BRHN'  -> [ Candidate {name: 'Berhane', ...},
 *                Candidate {name: 'Brhanne', ...},
 *              ]
 * }
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const candidateIndex = (candidateList) => {
  // ------ Challenge 2.2.4 - Complete the function here ---- //
  const index = {};

  for (const candidate of candidateList) {
    const normalizeCandidate = normalizedName(candidate.name);

    if (!index[normalizeCandidate]) {
      index[normalizeCandidate] = [];
    }
    index[normalizeCandidate].push(candidate);
  }

  return index;
};

/**
 * Find the number of (likely) duplicates in the given list,
 * according to the rules implemented in the areSimilarCandidates function.
 *
 * The candidateList can be a very large list, so the solution should only traverse the list once.
 *
 * @param {Array<Candidate>} candidateList
 *
 * @returns
 */
const duplicateCount = (candidateList) => {
  // ------ Challenge 2.2.5 - Complete the function here ---- //

  const sortedcandidateList = candidateList.sort(compareByName);

  let count = 0;

  for (let i = 0; i < sortedcandidateList.length; i++) {
    if (
      areSimilarCandidates(sortedcandidateList[i], sortedcandidateList[i + 1])
    ) {
      count++;
    }
  }

  return count;
};

const compareByName = (a, b) => {
  const name1 = a.name.toLowerCase();
  const name2 = b.name.toLowerCase();

  if (name1 > name2) {
    return 1;
  } else if (name1 < name2) {
    return -1;
  }
  return 0;
};

export {
  normalizedName,
  areSimilarCandidates,
  possibleDuplicates,
  duplicateCount,
  candidateIndex,
};
