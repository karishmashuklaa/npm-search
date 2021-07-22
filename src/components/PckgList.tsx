import { useState } from "react";

const PckgList: React.FC = () => {
    const [pckg, setPckg] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div>
           <form onSubmit={onSubmit}>
               <input 
               value={pckg} 
               onChange={e => setPckg(e.target.value)} 
               />
               <button>Search</button>
           </form>
        </div>
    )
}

export default PckgList;
