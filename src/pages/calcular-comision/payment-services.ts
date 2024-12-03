import { comisiones } from './maquinaparatarjetas';

interface Commission {
  name: string;
  factor: number;
}

interface PaymentService {
  name: string;
  commission: Array<Commission>;
}

export const PaymentServices: Array<PaymentService> = [
  {
    name: 'Transbank',
    commission: [
      {
        name: 'Débito',
        factor: comisiones.Transbank.Debito,
      },
    ],
  },
];
