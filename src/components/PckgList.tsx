import "../styles/index.css";
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
               type="text"
               value={pckg} 
               onChange={e => setPckg(e.target.value)} 
               />
               <button>Search</button>
           </form>
           {error && <h3>{error}</h3>}
           {loading && <h3>Loading...</h3>}
           {!error && !loading && 
           data.map((name) => 
           <div key={name} className="row">
                <div className="column">
                    <div className="card">
                       {name}
                    </div>
                </div>
            </div>
            )
           }
        </div>
    )
}

export default PckgList;
