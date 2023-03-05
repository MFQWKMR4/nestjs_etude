# chatgptにソースコード生成手伝ってもらうようDraft
## Entity
### MonsterTable
#### field
- name1 string
- name2 string
- hitpoint number
- magicpoint number
- attack number
- diffense number
- speed number
- kind string
- description string

### UserTable
#### field
- name string
- like_monster_name string
- unique_hash string

### BattleTable
#### field
- firstMonster Monster
- secondMonster Monster
- phase Phase
- actionRecords Action[]

### RoomTable
#### field
- status RoomStatus
- createUser User
- entryUser User nullable
- battle Battle nullable

### ActionMasterTable
#### field
- name string
- isAttack boolean
- attack number
- defense number
- createUser User

### ActionTable
#### field
- battle Battle
- turn number
- actionBy1 Action nullable
- actionBy2 Action nullable
- isPerformed boolean


## 