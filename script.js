//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			let max=-Infinity,second=-Infinity;
			for(let i=0;i<arr.length;i++){
			   let num=arr[i];
				if(num>max){
					second=max;
					max=num;
				}
				if(num<max && num>second){
					second=num;
				}
			}
			return second;
		}