function convertirMBaGB(megas) {
    const gigas = megas / 1024;
    return gigas.toFixed(2);
  }
  
  const megas = prompt("Ingresa la cantidad de megabytes:");
  
  const gigas = convertirMBaGB(megas);
  
  console.log(`${megas} MB son ${gigas} GB.`);
  