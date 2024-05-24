// Causa vs Efeito
import { useEffect, useState } from "react"

interface UserDetails {
  name: string;
  github: string;
}

function fetchProfileUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function profileUserInformation() {
  const [isNotRenderUserName, setShouldNotRenderUserName] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function isLoadingUser() {
      setShouldNotRenderUserName(true)

      const fetchUserResponse = fetchProfileUser()

      setUserData(fetchUserResponse.data.user)
      
      setShouldNotRenderUserName(false)
    }

    isLoadingUser()
  })

  if (isNotRenderUserName) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}