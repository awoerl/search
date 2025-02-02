import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import CSArea from "../hooks/useArea";
import useSearchQueryStore from "../store";
import useAreas from "../hooks/useAreas";

const AreaSelector = () => {
  const selectedAreaId = useSearchQueryStore((s) => s.searchQuery.areaId);
  const selectAreaId = useSearchQueryStore((s) => s.setAreaId);
  const { data, error } = useAreas();
  const selectedPlatform = CSArea.getArea(selectedAreaId || 0);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.title : "Area"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => selectAreaId()} key={0}>
          All Areas
        </MenuItem>
        {data?.items.map((area) => (
          <MenuItem onClick={() => selectAreaId(area.id)} key={area.id}>
            {area.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AreaSelector;
