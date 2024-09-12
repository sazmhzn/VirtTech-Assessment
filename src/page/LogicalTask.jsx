const LogicalTask = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-4 w-[70%] ">
      <div className="w-full p-4  flex flex-col items-start">
        <header>
          <h2 className="text-xl font-bold mb-4">Task 3</h2>
          <ul>
            <li className="text-justify">
              {" "}
              <strong> Time Complexity: </strong> O(n), where n is the length of
              the input array nums. This code has a single for loop that runs
              thorughout the array till n - 1. Thus the time complexity is O(n),
              wheen n is hte length of array
            </li>
            <li className="text-justify">
              <strong>Space Complexity:</strong> O(1), because the function only
              uses a fixed amount of memory regardless of the input size. There
              are few variables to track the chain length. There are no extra
              space like array that grow with input size. Therefore, space
              complexity is O(1), as the memory usage does not depend on the
              size of input array
            </li>
          </ul>
        </header>
        <code className="font-serif text-sm border-2 border-neutral-400 rounded-md p-4">
          <pre>
            {`function longestChain(nums) {
  if (nums.length === 0) return 0;

  let longestChainLength = 1;
  let prevLongestChainLength = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    let currentNum = nums[i];
    let nextNum = nums[i+1]
    let currentChainLength = 1;
    
      if( currentNum + 1 === nextNum  ) {
          prevLongestChainLength += 1          
          if( longestChainLength < prevLongestChainLength ) {
            longestChainLength = prevLongestChainLength 
          }
      } else {
          prevLongestChainLength = 1
      }
  }

  return longestChainLength;
}

console.log(longestChain([]))`}
          </pre>
        </code>
      </div>
      <div className="w-full flex flex-col items-start">
        <header>
          <h2 className="text-xl font-bold mb-4">Task 5</h2>
          <p>
            Time Complexity: O(n), where n is the length of the input array
            nums.
          </p>
          <p>
            Space Complexity: O(1), because the function only uses a fixed
            amount of memory regardless of the input size.
          </p>
        </header>
        <code className="font-serif text-sm border-2 border-neutral-400 rounded-md p-4">
          <pre>
            {`function countSmaller(nums) {
    let count = Array(nums.length).fill(0);
    for( let i = 0; i < nums.length - 1; i++ ) {
        for( let j = i + 1; j < nums.length; j++ ) {
            if( nums[i] > nums[j] ){
                count[i] += 1;
            }
        }
    }
    return count
};

console.log(countSmaller([5,1,2,6,2]))`}
          </pre>
        </code>
      </div>
    </section>
  );
};

export default LogicalTask;
