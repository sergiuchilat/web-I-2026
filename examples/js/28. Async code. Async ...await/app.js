function syncFunction() {
  return 1;
}

async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
}

async function main() {
  let result = 0;

  result = asyncFunction(); // 2
  console.log('Result from async function:', result);

  result = syncFunction(); // 1
  console.log('Result from sync function:', result);
}

main();
