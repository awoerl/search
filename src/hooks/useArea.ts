import useAreas from "./useAreas";

class Area {

  static getArea = <Area>(id?: number) => {
    const { data: areas } = useAreas();
    return areas?.items.find(p => p.id === id);
  }
  
}

export default Area;

