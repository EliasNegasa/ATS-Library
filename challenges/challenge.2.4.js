// eslint-disable-next-line no-unused-vars
import { Candidate } from '../common/model.js';

/**
 * Part 4: Referals
 * ------------------------------------------
 * Candidates can recommend other candidates. This is indicated by the
 * recommendedBy property of candidates.
 *
 */

/**
 * Candidates receive a referal bonus when one of their recommendations
 * (direct or indirect) is hired. The bonus amount gets halved as we go up the recommendation chain.
 * For example: if the direct referer receives 20,000 birr in bonuses, their referer (if any) receives 10,000,
 * the following referer get 5,000, the following 2,500
 * and so on, with the bonus amount divided by 2 as we go up the recommendation chain.
 *
 * This function returns the total amount of bonuses to be paid to the given candidate's
 * direct and indirect referers.
 *
 * @param {Candidate} candidate
 * @param {Number} initialBonus
 */
const totalBonuses = (candidate, initialBonus) => {
  // ----- Challenge 2.4.1 - Complete the function here ---- //

  if (candidate.recommendedBy) {
    return (
      initialBonus + totalBonuses(candidate.recommendedBy, initialBonus / 2)
    );
  } else {
    return 0;
  }
};

export { totalBonuses };
