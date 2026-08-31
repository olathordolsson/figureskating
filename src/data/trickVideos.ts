// YouTube video IDs per trick ID
export const TRICK_VIDEOS: Record<string, string> = {
  // Hopp
  'waltz':         'lajRteZxQxU', // Coach Mary — Waltz Jump
  'axel-1':        'j__OA16E2Kw', // Single Axel tutorial
  'axel-2':        'dPi57uI38gA', // Double Axel
  'axel-3':        'dWhsSTwWNX0', // Triple Axel slow motion
  'salchow-1':     'exupEwh6PDc', // Single Salchow tutorial
  'salchow-2':     '0YAC_2zJ0Cg', // Double Salchow
  'salchow-3':     'sAhHNsT1Ic8', // Triple Salchow slow motion
  'loop-1':        'W9pMB9p7ODY', // Single Loop tutorial
  'loop-2':        'roPXwrICIEA', // Double Loop
  'loop-3':        'Hmv48301eXU', // Triple Loop
  'toe-loop-1':    '6a3URzAHPGQ', // Coach Mary — Toe Loop
  'toe-loop-2':    'vZE0C0riWrk', // Double Toe Loop
  'toe-loop-3':    'TS_wf4APud4', // Triple Toe Loop slow motion
  'flip-1':        'Lyy-L-42Hsw', // Single Flip tutorial
  'flip-2':        'nvRcR23nz2s', // Double Flip
  'flip-3':        'SlEx48jE4rw', // Triple Flip slow motion
  'lutz-1':        '5OGECS-1XO0', // Single Lutz tutorial
  'lutz-2':        'IM_7ZtUhg3w', // Double Lutz
  'lutz-3':        'xoj1LY50MoQ', // Triple Lutz slow motion
  'euler-1':       '3hUA8Az_4vs', // Euler / Half Loop tutorial

  // Piruetter
  'uppright-basic':    'uD4IVjZQ35Q', // Coach Mary — One Foot Spin
  'scratch-spin':      'uD4IVjZQ35Q',
  'back-spin':         'uD4IVjZQ35Q',
  'sit-spin':          'Ds2Qg7z1_n8', // Coach Mary — Sit Spin
  'sit-spin-back':     'Ds2Qg7z1_n8',
  'camel-spin':        'OO2xE9MJEZo', // Coach Mary — Camel Spin
  'layover-camel':     'OO2xE9MJEZo',
  'flying-camel':      'G34Pl-f_HAk', // Flying Camel Spin
  'flying-sit-spin':   'G34Pl-f_HAk',
  'combination-spin':  '2Zy_NU95V3Y', // Combo Spin Drills

  // Svängar & Steg
  'three-turn':    'iPMvnw1bpaA', // Next Edge — The Four Turns
  'bracket':       'iPMvnw1bpaA',
  'rocker':        'iPMvnw1bpaA',
  'counter':       'iPMvnw1bpaA',
  'loop-turn':     'iPMvnw1bpaA',
  'mohawk':        '6rNfhz_aAE8', // 6 Types of Steps Footwork
  'choctaw':       '6rNfhz_aAE8',
  'twizzle':       'TvqVaTh9IpM', // How To Do Twizzles

  // Glidövningar
  'spread-eagle':      '7wN1fI8fTrY', // Outside Spread Eagle
  'ina-bauer':         'ffbE0b_X49M', // Ina Bauer Tutorial
  'spiral':            '-ZY9OEBGvMY', // How To Do A Spiral
  'charlotte-spiral':  'yDcaJWn-w9k', // How To Do A Charlotte Spiral
  'biellmann-spiral':  'JZCRNqqwU3M', // Biellmann Spiral
  'hydroblading':      '8HfIF0n9TIU', // Hydroblade Tutorial
  'cantilever':        'r9NwqdzT6vA', // Cantilever Tutorial

  // Hopp — saknade
  'split-jump':        'ioA_MPRElPk', // Split Jump Tutorial

  // Piruetter — saknade
  'layback-spin':      'bp8fjGQJUyE', // Layback Spin
  'biellmann-spin':    'JCXBNUbzgDc', // Biellmann Spin
  'attitude-spin':     'NqK6TcriMHE', // Attitude Spin
  'pancake-spin':      'v-MoudwLLf0', // Pancake Spin
  'cannonball-spin':   '3fSScWgYJLw', // Cannonball Spin
  'donut-spin':        'N5MQyM0BSYc', // Donut Spin
  'illusion-spin':     'OEi4OYce3Ak', // Illusion Spin
  'butterfly':         'n_JPB-nSoSA', // Butterfly
  'death-drop':        'YM0W5s9d0ko', // Death Drop

  // Hopp — nya
  'bunny-hop':      'd8rMlxbSbOk', // Bunny Hop tutorial
  'mazurka':        '1xUnADKtSGs', // Mazurka jump tutorial
  'half-flip':      'y5bpoRSP5V8', // Half Flip tutorial
  'ballet-jump':    'lFWX_634QJY', // Ballet Jump tutorial
  'stag-jump':      'xJ6jr4aMiNQ', // Stag Jump tutorial
  'butterfly-jump': 'n_JPB-nSoSA', // Butterfly Jump
  'falling-leaf':   'RcJb4v0ch0E', // Falling Leaf tutorial
  'toe-loop-4':     'PqV-na1V-Qs', // Quad Toe Loop — Nathan Chen
  'salchow-4':      '4ms8jDSlWTU', // Quad Salchow — Yuzuru Hanyu
  'loop-4':         '-XNO0gGez4w', // Quad Loop — Yuzuru Hanyu
  'flip-4':         'LgrreuNAn3o', // Quad Flip — Shoma Uno
  'lutz-4':         'F9Q4CHk1JUs', // Quad Lutz — Nathan Chen
  'axel-4':         'Pr8oqacv7wM', // Quad Axel — Ilia Malinin

  // Piruetter — nya
  'y-spin':              'uD4IVjZQ35Q',
  'a-frame-spin':        'uD4IVjZQ35Q',
  'haircutter-spin':     'uD4IVjZQ35Q',
  'svamp-spin':          'Ds2Qg7z1_n8',
  'shoot-the-duck-spin': 'Ds2Qg7z1_n8',
  'back-camel-spin':     'OO2xE9MJEZo',
  'catch-foot-camel':    'OO2xE9MJEZo',
  'pearl-spin':          'OO2xE9MJEZo',
  'flying-upright-spin': 'G34Pl-f_HAk',
  'sit-upright-combo':   '2Zy_NU95V3Y',
  'camel-sit-combo':     '2Zy_NU95V3Y',

  // Svängar — nya
  'inside-three-turn': 'iPMvnw1bpaA',
  'outside-mohawk':    '6rNfhz_aAE8',
  'inside-mohawk':     '6rNfhz_aAE8',
  'outside-choctaw':   '6rNfhz_aAE8',
  'inside-choctaw':    '6rNfhz_aAE8',

  // Steg — nya
  'chasse':          '6rNfhz_aAE8',
  'crossovers':      '6rNfhz_aAE8',
  'back-crossovers': '6rNfhz_aAE8',
  'cross-rolls':     '6rNfhz_aAE8',
  'progressive':     '6rNfhz_aAE8',
  'toe-step':        '6rNfhz_aAE8',
  'slalom':          '6rNfhz_aAE8',
  'power-pulls':     '6rNfhz_aAE8',
  'swing-roll':      '6rNfhz_aAE8',
  'cluster':         'TvqVaTh9IpM',
  'toe-twizzle':     'TvqVaTh9IpM',
  'bracket-twizzle': 'TvqVaTh9IpM',
  'counter-twizzle': 'TvqVaTh9IpM',
  'rocker-twizzle':  'TvqVaTh9IpM',

  // Glidövningar — nya
  'y-spiral':          '-ZY9OEBGvMY',
  'catch-foot-spiral': '-ZY9OEBGvMY',
  'penche-spiral':     '-ZY9OEBGvMY',
  'shoot-the-duck':    '-ZY9OEBGvMY',
  'drag':              '-ZY9OEBGvMY',
  'lunge':             '-ZY9OEBGvMY',
  'bauer-spiral':      '7wN1fI8fTrY',
  'arabesque':         '-ZY9OEBGvMY',
  'fan-spiral':        '-ZY9OEBGvMY',
  'side-spiral':       '-ZY9OEBGvMY',
  'forward-spiral':    '-ZY9OEBGvMY',
  'backward-spiral':   '-ZY9OEBGvMY',
};
