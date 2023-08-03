/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';

test('Normalized test', () => {
  expect(Utils.normalizedName('Berhane')).toBe('BRHN');
});
test('Normalized test', () => {
  expect(Utils.normalizedName('Birhanie')).toBe('BRHN');
});
test('Normalized test', () => {
  expect(Utils.normalizedName('Brhanne')).toBe('BRHN');
});
test('Normalized test', () => {
  expect(Utils.normalizedName('Abraham')).toBe('ABRHM');
});

test('Normalized test', () => {
  expect(Utils.normalizedName('Abdu Salam')).toBe('ABDSLM');
});

test('Normalized test', () => {
  expect(Utils.normalizedName('H/Mariam')).toBe('HMRM');
});
