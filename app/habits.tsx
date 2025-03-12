type Habits = {
   
    title: string;
    description: string;

}

type HabitsProps= {
    habits: Habits[];
}

export default function Habits({habits}: HabitsProps) {
  return (
     <ul>
        
        {habits.map((habits) => (

              <li key={habits.title}>{habits.title}</li>
        ))}      

     </ul> 
   );
}