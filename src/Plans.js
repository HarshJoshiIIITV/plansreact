import React,{Component} from 'react';
import 'tachyons';

const Plans=({plans,deletePlan})=>{
	return(
		<div className="plans">
		{
					plans.length>0
					?
					(
						plans.map(plan=>{
							return(
								<div className="plan b f3 mid-gray garamond mb4 " key={plan.id}>
									<span  onClick={()=>{deletePlan(plan.id)}}>{plan.content} </span>
								</div>
								)
						})
					)
					:
					(
						<p className="f3 b"> Congrats all done !</p>
					)
		}
		</div>
	)
}

export default Plans;