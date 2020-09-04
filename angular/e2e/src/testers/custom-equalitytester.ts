export function CustomEqualityTester(testStr: string, testStrArray: string[]): boolean {
  for (const str in testStrArray) {
    if (testStr === str) {
      return true;
    }
  }
  return false;
}
