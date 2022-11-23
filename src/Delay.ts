import { sleep } from './sleep';


export class Delay
{
    private readonly _ms:       number;
    private readonly _start:    number;


    constructor ( ms: number )
    {
        this._ms    = ms;
        this._start = Date.now();
    }


    public async sleep ( ): Promise<void>
    {
        const diff = this._ms - (Date.now() - this._start);
        if ( diff <= 0 )
        {
            return;
        }

        await sleep(diff);
    }
}
