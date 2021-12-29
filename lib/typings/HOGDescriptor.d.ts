import { Mat } from './Mat.d';
import { Size } from './Size.d';
import { Rect } from './Rect.d';
import { Point2 } from './Point2.d';



  export class HOGDescriptor {
    readonly winSize: Size;
    readonly blockSize: Size;
    readonly blockStride: Size;
    readonly cellSize: Size;
    readonly nbins: number;
    readonly derivAperture: number;
    readonly histogramNormType: number;
    readonly nlevels: number;
    readonly winSigma: number;
    readonly L2HysThreshold: number;
    readonly gammaCorrection: boolean;
    readonly signedGradient: boolean;
    constructor(winSize?: Size, blockSize?: Size, blockStride?: Size, cellSize?: Size, nbins?: number, derivAperture?: number, winSigma?: number, histogramNormType?: number, L2HysThreshold?: number, gammaCorrection?: boolean, nlevels?: number, signedGradient?: boolean);
    constructor(params: { winSize?: Size, blockSize?: Size, blockStride?: Size, cellSize?: Size, nbins?: number, derivAperture?: number, winSigma?: number, histogramNormType?: number, L2HysThreshold?: number, gammaCorrection?: boolean, nlevels?: number, signedGradient?: boolean });
    checkDetectorSize(): boolean;
    compute(img: Mat, winStride?: Size, padding?: Size, locations?: Point2[]): number[];
    computeAsync(img: Mat, winStride?: Size, padding?: Size, locations?: Point2[]): Promise<number[]>;
    computeGradient(img: Mat, paddingTL?: Size, paddingBR?: Size): { grad: Mat, angleOfs: Mat };
    computeGradientAsync(img: Mat, paddingTL?: Size, paddingBR?: Size): Promise<{ grad: Mat, angleOfs: Mat }>;
    detect(img: Mat, hitThreshold?: number, winStride?: Size, padding?: Size, searchLocations?: Point2[]): { foundLocations: Point2[], weights: number[] };
    detectAsync(img: Mat, hitThreshold?: number, winStride?: Size, padding?: Size, searchLocations?: Point2[]): Promise<{ foundLocations: Point2[], weights: number[] }>;
    detectMultiScale(img: Mat, hitThreshold?: number, winStride?: Size, padding?: Size, scale?: number, finalThreshold?: number, useMeanshiftGrouping?: boolean): { foundLocations: Rect[], foundWeights: number[] };
    detectMultiScaleAsync(img: Mat, hitThreshold?: number, winStride?: Size, padding?: Size, scale?: number, finalThreshold?: number, useMeanshiftGrouping?: boolean): Promise<{ foundLocations: Rect[], foundWeights: number[] }>;
    detectMultiScaleROI(img: Mat, hitThreshold?: number, groupThreshold?: number): Rect[];
    detectMultiScaleROIAsync(img: Mat, hitThreshold?: number, groupThreshold?: number): Promise<Rect[]>;
    detectROI(img: Mat, locations: Point2[], hitThreshold?: number, winStride?: Size, padding?: Size): { foundLocations: Point2[], confidences: number[] };
    detectROIAsync(img: Mat, locations: Point2[], hitThreshold?: number, winStride?: Size, padding?: Size): Promise<{ foundLocations: Point2[], confidences: number[] }>;
    getDaimlerPeopleDetector(): number[];
    getDefaultPeopleDetector(): number[];
    groupRectangles(rectList: Rect[], weights: number[], groupThreshold: number, eps: number): Rect[];
    groupRectanglesAsync(rectList: Rect[], weights: number[], groupThreshold: number, eps: number): Promise<Rect[]>;
    load(path: string): void;
    save(path: string): void;
    setSVMDetector(detector: number[]): void;
  }
