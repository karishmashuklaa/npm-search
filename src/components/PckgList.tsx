import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PckgList: React.FC = () => {
    const [pckg, setPckg] = useState('');
    const { searchPckg } = useActions();
    const { data, loading, error } = useTypedSelector((state) => state.pckgs);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchPckg(pckg);
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
