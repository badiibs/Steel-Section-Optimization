const initialData = {
  inputs: {
    fy: {
      name: 'fy',
      text: 'fy',
      value: 235,
      description: 'Limite élastique de la section  (en MPa)',
      unit: 'MPa'
    },
    N: {
      name: 'N',
      text: 'N',
      value: 1000,
      description: 'Effort normal (kN):',
      unit: 'kN'
    },
    My: {
      name: 'My',
      text: 'My',
      value: 1000,
      description: 'Moment fléchissant autour de y (kN.m):',
      unit: 'kN.m'
    },
    water: {
      name: 'water',
      text: 'water',
      value: 162,
      description: 'Water (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    super_plasticizer: {
      name: 'super_plasticizer',
      text: 'super_plasticizer',
      value: 2.5,
      description: 'Super Plasticizer (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    coarse_agg: {
      name: 'coarse_agg',
      text: 'coarse_agg',
      value: 1040,
      description: 'Coarse Aggregate  (kg in a m^3 mixture):',
      unit: 'kg/m3'
    },
    fine_agg: {
      name: 'fine_agg',
      text: 'fine_agg',
      value: 676,
      description: 'Fine Aggregate (kg in a m^3 mixture):',
      unit: 'kg/m3'
    },
    age: {
      name: 'age',
      text: 'age',
      value: 28,
      description: 'Age (day):',
      unit: 'days'
    },
  },
  outputs: {
    compressive_strength: {
      name: 'Predicted section',
      text: 'Predicted Section',
      value: "",
      description: 'The Best Section choice',
      unit: ''
    }
  }  
}

export default initialData;
