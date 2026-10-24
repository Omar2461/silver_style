import {create} from 'zustand';


interface Material {
    id:number;
    name:string;
    size:number;
    createdAt:Date;
    // updatedAt:Date;
}

interface MaterialStoreState {
  materials: Material[]
  loading: boolean
  error: string | null
  fetchMaterials: () => void
  addMaterial: (account: Material) => Promise<void>
}

export const useTypeStore =create<MaterialStoreState>((set,get)=>({
    materials:[],
    loading:false,
    error:null,
    fetchMaterials:async()=>{
        set({loading:true,error:null})
        try{
            const res=await fetch(`${process.env.NEXT_PUBLIC_DOTNET_API}/Type`)
            if(!res.ok){
                throw new Error('Failed to fetch categories')
            }
            const data:Material[]=await res.json();
           set({materials:data,loading:false})
        }
    catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
    },
addMaterial:async()=>{
    set({loading:true,error:null})
    try{
        // const res= await featch();
    }
    catch(err){
        console.log(`the error is => ${err}`);
    }
}
}))