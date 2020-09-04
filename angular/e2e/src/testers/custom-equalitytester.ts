export function CustomEqualityTester(testStr: string, testStrArray: string[]): boolean {
  for (const d in testStrArray) {
    if (testStr == testStrArray[d]) {
      return true;
    }
  }
  return false;
}
