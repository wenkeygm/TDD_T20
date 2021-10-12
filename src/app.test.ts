import {ballsRemaining, randTest, strikeChangingWithScore, strikeChangingWithOver} from "./app"
let playerNames:string[]=["kirat Boli", "N.s Nodhi", "R Rumrah", "Shashi Henra"];
let probablity:Array<any> = [
    {"Dot":.05,1:.3, 2:.25, 3:.1, 4:.15, 5:.01, 6:.09,"out":.05},
    {"Dot":.1,1:.4, 2:.2, 3:.05, 4:.1, 5:.01, 6:.04,"out":.1},
    {"Dot":.2,1:.3, 2:.15, 3:.05, 4:.05, 5:.01, 6:.04,"out":.2},
    {"Dot":.3,1:.25, 2:.05, 3:0, 4:.05, 5:.01, 6:.04,"out":.3}];

test("test for number of balls left is 24", ()=>{
    const totalBall=ballsRemaining();
    expect(totalBall).toBe(24);
})

test("testing of random numbers for score call",()=>{
    let i:number =Math.floor(Math.random()*probablity.length);
        let temp = randTest(probablity[i]);
        if(temp=="Dot"){
            expect(temp).toEqual("Dot");
        }else if(temp=="out"){
            expect(temp).toEqual("out");
        }else{
            expect(parseInt(temp)).toBeLessThanOrEqual(6);
            expect(parseInt(temp)).toBeGreaterThanOrEqual(1);
        }
    })
test("changing the strike is failed in run case",()=>{
         const score:number=ballsRemaining();
         const scoreStrike:string = strikeChangingWithScore(score);  
         expect(playerNames).toContain(scoreStrike);
    
})
test("changing of strike is failed in over case",()=>{
        const strikeOver=strikeChangingWithOver();
        expect(playerNames).toContain(strikeOver);
});