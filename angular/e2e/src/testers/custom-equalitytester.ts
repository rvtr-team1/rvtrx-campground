export function CustomEqualityTester(testStr: string, testStrArray: string[]): boolean {
  for (const s in testStrArray) {
    if (testStr === testStrArray[s]) {
      return true;
    }
  }
  return false;
}
