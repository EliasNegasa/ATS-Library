/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { Job, Candidate, Skill } from '../common/model.js';

/**
 * Part 1: Basic utility functions.
 *
 * The challenge is to create optimal solutions for implementing some of the
 * common utility functions that we will need to build our ATS solution.
 *
 *
 */

/**
 * Filter the given jobs list and return only jobs that start between the given
 * start and end dates.
 *
 * @param {Array<Job>} jobs
 * @param {Date} startDate
 * @param {Date} endDate
 */
const filterByDate = (jobs, startDate, endDate) => {
  // ----- Challenge 2.1.1 - Complete the function here ---- //
  return jobs.filter(
    (job) => job.startDate >= startDate && job.startDate <= endDate
  );
};

/**
 * Filter the given candidates list and return only candidates that are born
 * on or after the given date.
 *
 * @param {Array<Candidate>} candidates
 * @param {Date} date
 */
const filterByBornAfter = (candidates, date) => {
  // ----- Challenge 2.1.2 - Complete the function here ---- //
  return candidates.filter((candidate) => candidate.dateOfBirth >= date);
};

/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  // ----- Challenge 2.1.3 - Complete the function here ---- //

  candidateList.sort(
    (candidate1, candidate2) =>
      candidate2.skills.length - candidate1.skills.length
  );

  return candidateList;
};

/**
 * Sort the given candidate list, so that candidates with more valuable skills,
 * are at the beginning.
 * Each skill will be weighed as follows: Expert levels count as 10, Advanced levels count as 5, Beginner levels count as 1
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const orderByWeightedSkills = (candidateList) => {
  // ----- Challenge 2.1.4 - Complete the function here ---- //

  const sortedCandidate = candidateList.sort(
    (candidate1, candidate2) =>
      candidate2.skills.reduce(
        (skillSum, skill) => skillSum + weigh(skill.level),
        0
      ) -
      candidate1.skills.reduce(
        (skillSum, skill) => skillSum + weigh(skill.level),
        0
      )
  );

  return sortedCandidate;
};

const weigh = (level) => {
  return level === 2 ? 10 : level === 1 ? 5 : 1;
};

/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {
  // ----- Challenge 2.1.5 - Complete the function here ---- //

  let female = 0;
  let male = 0;

  for (const candidate of candidateList) {
    if (candidate.gender === 'M') {
      male++;
    } else {
      female++;
    }
  }

  return male === 0 ? female : female / male;
};

/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {
  // ----- Challenge 2.1.6 - Complete the function here ---- //
  const monthsCount = Array.from({ length: 12 }, () => 0);

  for (const job of jobs) {
    const monthIndex = job.startDate.getMonth();
    monthsCount[monthIndex]++;
  }

  const maxMonth = Math.max(...monthsCount);

  const busyMonth = monthsCount.indexOf(maxMonth);

  return busyMonth;
};

/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */
const mostInDemandSkill = (jobs) => {
  // ----- Challenge 2.1.7 - Complete the function here ---- //

  const skillsCount = {};

  for (const job of jobs) {
    for (const skill of job.requiredSkills) {
      const { name } = skill;
      skillsCount[name] = (skillsCount[name] || 0) + 1;
    }
  }

  const skills = Object.keys(skillsCount); // s1, s2, s3, s4

  const mostInDemandCount = skills.reduce((maxSkill, skill) => {
    if (skillsCount[skill] > skillsCount[maxSkill]) {
      return skill;
    }
    return maxSkill;
  }, skills[0]);

  const mostInDemand = skills.filter(
    (skill) => skillsCount[skill] === skillsCount[mostInDemandCount]
  );

  return mostInDemand.sort();
};

export {
  filterByDate,
  filterByBornAfter,
  orderBySkills,
  orderByWeightedSkills,
  genderRatio,
  busiestMonth,
  // eslint-disable-next-line comma-dangle
  mostInDemandSkill,
};
