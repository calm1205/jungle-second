import { Box, Tab } from '~/components/atoms'
import { Edge } from './Edge'
import { useNavigate, useParams } from 'react-router-dom'

type Tabs = {
  tabs: string[]
}

export const Tabs: React.FC<Tabs> = ({ tabs }) => {
  const { recruitId } = useParams()
  const navigate = useNavigate()

  return (
    <Box $display="flex">
      <Edge />
      {tabs.map((key) => {
        return (
          <Tab
            key={key}
            text={key}
            isActive={key === recruitId}
            onClick={() => navigate(`/recruit/${key}`)}
          />
        )
      })}
      <Edge />
    </Box>
  )
}
