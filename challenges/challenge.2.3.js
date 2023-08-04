/* eslint-disable comma-dangle */
// eslint-disable-next-line no-unused-vars
import { Candidate, Job } from '../common/model.js';

/**
 * Part 3: Job matching
 * ------------------------------------------
 *
 */

/**
 * This function returns true only if the candidateSkill is a match
 * for the job skill:
 * - the names are identical, regardless of case
 * - the candidate's skill level is higher or equal to the job skill level
 *
 *
 * @param {Skill} candidateSkill
 * @param {Skill} jobSkill
 */
const skillsMatch = (candidateSkill, jobSkill) => {
  // ----- Challenge 2.3.1 - Complete the function here ---- //

  const candidateSkillName = candidateSkill.name.toUpperCase();
  const jobSkillName = jobSkill.name.toUpperCase();

  return (
    candidateSkillName === jobSkillName &&
    candidateSkill.level >= jobSkill.level
  );
};

/**
 * Returns true if the candidate meets the gender requirements
 * of the given job. If the job has no gender requirements, all candidates
 * are suitable.
 *
 * @param {Candidate} candidate
 * @param {Job} job
 */
const suitableGender = (candidate, job) => {
  // ----- Challenge 2.3.2 - Complete the function here ---- //

  return job.requiredGender === candidate.gender || !job.requiredGender;
};

/**
 *
 * This function returns a number between 0 and 100 indicating the suitability
 * of the candidate for the given job. Rules are as follows:
 * - 20% of the score is allocated for gender suitablity.
 * - 80% is reserved for matching skills. A candidate who has all the skills required by the job will
 * get 80%.
 * The result will be rounded to the closest whole number.
 *
 * @param {String} name
 * @returns String
 */

const suitabilityScore = (candidate, job) => {
  const genderScore = suitableGender(candidate, job) ? 20 : 0;

  const jobSkillsMap = new Map();

  job.requiredSkills.forEach((skill) => {
    const { name, level } = skill;

    jobSkillsMap.set(skill.name, {
      name,
      level,
    });
  });

  let matchedSkill = 0;

  for (const candidateSkill of candidate.skills) {
    const skillName = candidateSkill.name.toLowerCase();

    if (jobSkillsMap.has(skillName)) {
      if (skillsMatch(candidateSkill, jobSkillsMap.get(skillName))) {
        matchedSkill++;
      }
    }
  }

  const jobSkillCount = job.requiredSkills.length;
  const score = genderScore + (matchedSkill / jobSkillCount) * 80;

  return Math.round(score);
};

/**
 * The 'hotness' of a candidate is defined by the number of jobs
 * for which their suitability score is greater than 80.
 * This function returns the highest 'hotness' score from the candidates list
 * and the provided jobs list.
 *
 * @param {Array<Candidate>} candidates
 * @param {Array<Job>} jobs
 * @returns number
 */
const hottestCandidate = (candidates, jobs) => {
  const candidateScores = candidates.map((candidate) => {
    const scores = jobs.map((job) => suitabilityScore(candidate, job));
    return scores;
  });

  const hotness = candidateScores.map(
    (scores) => scores.filter((score) => score > 80).length
  );

  const hotnessScore = Math.max(...hotness);

  return hotnessScore;
};

export { skillsMatch, suitableGender, suitabilityScore, hottestCandidate };
