import React from 'react';
import { ReactComponent as ThematicIcon } from '../../assets/icons/thematic.svg';
import { ReactComponent as CommitmentIcon } from '../../assets/icons/commitment.svg';
import { ReactComponent as MilestoneIcon } from '../../assets/icons/milestones.svg';
import { ReactComponent as MembersIcon } from '../../assets/icons/members.svg';

const analyticsList = [{ count: '7', title: "Thematic Areas", icon: <ThematicIcon /> },
{
    count: '16',
    title: 'Commitments',
    icon: <CommitmentIcon/>
},
{
    count: '119',
    title: 'Milestones',
    icon: <MilestoneIcon/>
},
{
    count: '139',
    title: 'Members',
    icon: <MembersIcon />
}
];

export default analyticsList;
