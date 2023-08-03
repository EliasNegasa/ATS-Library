/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane', new Date(2010, 1, 1), [], 'F');
const c2 = new Candidate('Birhanie', new Date(2010, 1, 1), [], 'M');
const c3 = new Candidate('Brhanne', new Date(2010, 1, 1), [], 'F');
const c4 = new Candidate('Abraham', new Date(2010, 1, 1), [], 'F');
const c5 = new Candidate('Abreham', new Date(2010, 1, 1), [], 'M');

describe('Candidate Index', () => {
  test('Index 1', () => {
    expect(Utils.candidateIndex([c1, c2, c3])).toEqual({
      BRHN: [c1, c2, c3],
    });
  });

  test('Index 2', () => {
    expect(Utils.candidateIndex([c4, c5])).toEqual({
      ABRHM: [c4, c5],
    });
  });

  test('Index 3', () => {
    expect(Utils.candidateIndex([c1, c2, c3, c4, c5])).toEqual({
      ABRHM: [c4, c5],
      BRHN: [c1, c2, c3],
    });
  });

  test('Index 4', () => {
    expect(Utils.candidateIndex([c1, c5])).toEqual({
      ABRHM: [c5],
      BRHN: [c1],
    });
  });

  test('Index 5', () => {
    expect(Utils.candidateIndex([])).toEqual({});
  });
});
