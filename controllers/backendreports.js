const addExpense=require('../models/addexpense')

exports.backendreports=(req,res,next)=>{
    // console.log(req,"123");
    const currdate=new Date();
   
    if(req.user.ispremium===true){
        addExpense.findAll({where:{expenseUserId:req.user.id}}).then(expenses=>{
            const monthlyExpenses=[];
            // console.log(res)
            const currmonth=currdate.getMonth();
            console.log(currmonth)
   //monthly expenses     
        //    console.log(expenses[0].createdAt.getMonth())
           for(let i=0;i<expenses.length;i++)
           {
            const date=expenses[i].createdAt.getMonth();
            console.log(currmonth)
            
            if(date===currmonth)
            {
                console.log('1234')
                monthlyExpenses.push(expenses[i])
            }
            
           }
           console.log(monthlyExpenses)
           
//daily expenses
           const today=currdate.getDate();
let today1=today;
           const monthtoday=currdate.getMonth();
           const yeartoday=currdate.getFullYear();
        //    console.log(today,monthtoday,yeartoday)
           const daily=[]
           for(let i=0;i<expenses.length;i++){
            
            const createdAtDate=expenses[i].createdAt.getDate();
            const createdAtMonth=expenses[i].createdAt.getMonth();
            const createdAtYear=expenses[i].createdAt.getFullYear();
            if(today==createdAtDate && monthtoday==createdAtMonth && yeartoday==createdAtYear){
                daily.push(expenses[i])
            }
           }
           console.log(daily,'4545')



           //weekly expenses
 let weekly=[];
           const day=currdate.getDay();
           let newDate=today1-day;//today1=currdate
           for(let j=today1;j>=newDate;j--){
            console.log(j)
            for(let i=0;i<expenses.length;i++){
                let createdAtDate=expenses[i].createdAt.getDate();
                const createdAtMonth=expenses[i].createdAt.getMonth();
                const createdAtYear=expenses[i].createdAt.getFullYear();
                const createdAtDay=expenses[i].createdAt.getDay();
                // weeklyLength=createdAtDay;
                // console.log(weeklyLength)
                if(monthtoday==createdAtMonth && yeartoday==createdAtYear){
                    if(createdAtDate==j){
                        
                        console.log('ghgh')
                        weekly.push(expenses[i])}

                    }
                    
           }}
           return res.status(200).json({success:'true',weekly,daily,monthlyExpenses})
           
        //    console.log(weekly,'aai')

        })
        
    }else{
                return res.status(401).json({ success:'false',message:'Not a premium User'});
                
    }
}