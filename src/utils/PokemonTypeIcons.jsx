//icons
import PestControlIcon from '@mui/icons-material/PestControl'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AirIcon from '@mui/icons-material/Air'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import GrassIcon from '@mui/icons-material/Grass'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined'
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined'
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined'
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined'
import AutoFixNormalOutlinedIcon from '@mui/icons-material/AutoFixNormalOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined'
//colors
import {
  red,
  green,
  lime,
  teal,
  blue,
  purple,
  yellow,
  grey
} from '@mui/material/colors'

export const PokemonTypeIcons = {
  bug: <PestControlIcon color={lime[500]} htmlColor={lime[500]} />,
  fighting: <SportsMartialArtsIcon color={red[900]} htmlColor={red[900]} />,
  flying: <AirIcon color={teal[200]} htmlColor={teal[200]} />,
  ghost: <ChildCareIcon />,
  ground: <TerrainOutlinedIcon color={yellow[900]} htmlColor={yellow[900]} />,
  normal: (
    <TripOriginOutlinedIcon color={grey['A400']} htmlColor={grey['A400']} />
  ),
  poison: (
    <ScienceOutlinedIcon color={purple['A200']} htmlColor={purple['A200']} />
  ),
  rock: <HexagonOutlinedIcon color={yellow['700']} htmlColor={yellow['700']} />,
  steel: <FoundationOutlinedIcon color={grey[600]} htmlColor={grey[600]} />,
  dark: <DarkModeOutlinedIcon color={grey['A400']} htmlColor={grey['A400']} />,
  dragon: (
    <LocalPoliceOutlinedIcon
      color={purple['A700']}
      htmlColor={purple['A700']}
    />
  ),
  electric: (
    <BoltOutlinedIcon color={yellow['A200']} htmlColor={yellow['A200']} />
  ),
  fire: (
    <LocalFireDepartmentOutlinedIcon
      color={red['A200']}
      htmlColor={red['A200']}
    />
  ),
  grass: <GrassIcon color={green[700]} htmlColor={green[700]} />,
  ice: <AcUnitIcon color={teal['A400']} htmlColor={teal['A400']} />,
  psychic: (
    <AutoFixNormalOutlinedIcon color={yellow[900]} htmlColor={yellow[900]} />
  ),
  water: <ShowerOutlinedIcon color={blue['A400']} htmlColor={blue['A400']} />
}
