# TS-Delay
Typescript library to delay something by a minimum amount of time

## Installation
```
npm install --save ts-delay
```

or 

```
yarn add ts-delay
```

## Examples
### Delay

```
import { Delay } from 'ts-delay';

async function main ( )
{
    console.log('Checking for updates ...');

    const delay = new Delay(1000);

    // This function finishes fast, but the user thinks id does nothing
    // if it doesn't take a minimum amount of time. But if the function
    // takes longer than usual, we don't want the user to have to wait
    // additional time....
    await checkForUpdates();

    // Wait 1000ms minus the time that already passed
    await delay.sleep();

    console.log('Finished checking for updates.');
}
```

### sleep

```
import { sleep } from 'ts-delay';

function async main ( )
{
    console.log('Running ...');

    await sleep(1000);

    console.log('Finished after 1s.');
}
```
