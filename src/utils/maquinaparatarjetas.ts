export const comisiones = {
  Transbank: {
    Debito: 0.001668 + 0.008 + 0.19 / 100, // Tasa fija + Tasa variable + IVA
    Credito: 0.001792 + 0.008 + 0.19 / 100,
    Prepago: 0.001668 + 0.008 + 0.19 / 100,
    Internacional: 0, // Sin información
  },
  'Getnet Arriendo': {
    Debito: 0.002 + 0.0063 + 0.19 / 100,
    Credito: 0.0023 + 0.0161 + 0.19 / 100,
    Prepago: 0.0019 + 0.0109 + 0.19 / 100,
    Internacional: 0.0122 + 0.028,
  },
  'Getnet Venta': {
    Debito: 0.0279 + 0.19 / 100,
    Credito: 0.0299 + 250 + 0.19 / 100,
    Prepago: 0.028 + 0.0122 + 0.19 / 100,
    Internacional: 0.0299 + 250 + 0.19 / 100,
  },
  TUU: {
    Debito: 0.0098 + 0.19 / 100,
    Credito: 0.0199 + 0.19 / 100,
    Prepago: 0, // Sin información
    Internacional: 0, // Sin información
  },
  SumUp: {
    Debito: 0.029 + 0.19 / 100,
    Credito: 0.029 + 0.19 / 100,
    Prepago: 0, // Sin información
    Internacional: 0, // Sin información
  },
  'Super CompraAqui': {
    Debito: 0.0149 + 0.19 / 100,
    Credito: 0.025 + 0.19 / 100,
    Prepago: 0.0199 + 0.19 / 100,
    Internacional: 0, // Sin información
  },
  'CompraAqui Banco Estado': {
    Debito: 0.025 + 0.19 / 100,
    Credito: 0.029 + 0.19 / 100,
    Prepago: 0, // Sin información
    Internacional: 0, // Sin información
  },
  'CompraAqui Otros Bancos': {
    Debito: 0.025 + 0.19 / 100,
    Credito: 0.029 + 0.19 / 100,
    Prepago: 0, // Sin información
    Internacional: 0, // Sin información
  },
  Redelcom: {
    Debito: 0.0295 + 0.19 / 100,
    Credito: 0.0295 + 0.19 / 100,
    Prepago: 0.026 + 0.19 / 100,
    Internacional: 0, // Sin información
  },
};
