// Boleanos

const userInformation = {
    name: 'Diego Fernandes',
    height: 190,
    hasTicket: true,
  }
  
  const necessaryHeight = 130
  
  const currentHour = new Date().getHours()
  
  const parkOpen = currentHour > 9 && currentHour < 18
  
  if (!parkOpen) {
    throw new Error('O parque está fechado!')
  }
  
  const isUserHaveATicket = userInformation.hasTicket
  
  if (!isUserHaveATicket) {
    throw new Error('O Diego não possui um bilhete para entrar no parque!')
  }
  
  const isRoleToEnterToy = userInformation.height > necessaryHeight
  
  if (!isRoleToEnterToy) {
    throw new Error('O Diego não pode entrar no brinquedo!')
  } 
  
  console.log('O Diego se divertiu muito! :)')