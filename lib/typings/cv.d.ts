import { Mat } from './Mat.d';
import { Size } from './Size.d';
import { Vec2 } from './Vec2.d';
import { Vec3 } from './Vec3.d';
import { Vec4 } from './Vec4.d';
import { Vec6 } from './Vec6.d';
import { Point2 } from './Point2.d';
import { Point3 } from './Point3.d';
import { KeyPoint } from './KeyPoint.d';
import { DescriptorMatch } from './DescriptorMatch.d';
import { Rect } from './Rect.d';
import { TermCriteria } from './TermCriteria.d';
import { OCRHMMClassifier } from './OCRHMMClassifier.d';
import { Net } from './Net.d';


  export class HistAxes {
    channel: number;
    bins: number;
    ranges: number[];

    constructor(opts: { channel: number, bins: number, ranges: [number, number] });
  }

  export function accumulate(src: Mat, dst: Mat, mask?: Mat): void;
  export function accumulateAsync(src: Mat, dst: Mat, mask?: Mat): Promise<void>;
  export function accumulateProduct(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
  export function accumulateProductAsync(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): Promise<void>;
  export function accumulateSquare(src: Mat, dst: Mat, mask?: Mat): void;
  export function accumulateSquareAsync(src: Mat, dst: Mat, mask?: Mat): Promise<void>;
  export function accumulateWeighted(src: Mat, dst: Mat, alpha: number, mask?: Mat): void;
  export function accumulateWeightedAsync(src: Mat, dst: Mat, alpha: number, mask?: Mat): Promise<void>;
  export function addWeighted(mat: Mat, alpha: number, mat2: Mat, beta: number, gamma: number, dtype?: number): Mat;
  export function addWeightedAsync(mat: Mat, alpha: number, mat2: Mat, beta: number, gamma: number, dtype?: number): Promise<Mat>;
  export function applyColorMap(src: Mat, colormap: number | Mat): Mat;
  export function blobFromImage(image: Mat, scaleFactor?: number, size?: Size, mean?: Vec3, swapRB?: boolean, crop?: boolean, ddepth?: number): Mat;
  export function blobFromImageAsync(image: Mat, scaleFactor?: number, size?: Size, mean?: Vec3, swapRB?: boolean, crop?: boolean, ddepth?: number): Promise<Mat>;
  export function blobFromImages(image: Mat[], scaleFactor?: number, size?: Size, mean?: Vec3, swapRB?: boolean, crop?: boolean, ddepth?: number): Mat;
  export function blobFromImagesAsync(image: Mat[], scaleFactor?: number, size?: Size, mean?: Vec3, swapRB?: boolean, crop?: boolean, ddepth?: number): Promise<Mat>;
  export function blur(mat: Mat, kSize: Size, anchor?: Point2, borderType?: number): Mat;
  export function blurAsync(mat: Mat, kSize: Size, anchor?: Point2, borderType?: number): Promise<Mat>;
  export function NMSBoxes(bboxes: Rect[], scores: number[], scoreThreshold: number, nmsThreshold: number): number[];
  /** @deprecated */
  export function calcHist(img: Mat, histAxes: { channel: number, bins: number, ranges: [number, number] }[], mask?: Mat): Mat;
  export function calcHist(img: Mat, histAxes: HistAxes[], mask?: Mat): Mat;
  export function calcHistAsync(img: Mat, histAxes: HistAxes[], mask?: Mat): Promise<Mat>;
  export function calibrateCamera(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, cameraMatrix: Mat, distCoeffs: number[], flags?: number, criteria?: TermCriteria): { returnValue: number, rvecs: Vec3[], tvecs: Vec3[], distCoeffs: number[] };
  export function calibrateCameraAsync(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, cameraMatrix: Mat, distCoeffs: number[], flags?: number, criteria?: TermCriteria): Promise<{ returnValue: number, rvecs: Vec3[], tvecs: Vec3[], distCoeffs: number[] }>;
  export function calibrateCameraExtended(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, cameraMatrix: Mat, distCoeffs: number[], flags?: number, criteria?: TermCriteria): { returnValue: number, rvecs: Vec3[], tvecs: Vec3[], distCoeffs: number[], stdDeviationsIntrinsics: Mat, stdDeviationsExtrinsics: Mat, perViewErrors: number[] };
  export function calibrateCameraExtendedAsync(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, cameraMatrix: Mat, distCoeffs: number[], flags?: number, criteria?: TermCriteria): Promise<{ returnValue: number, rvecs: Vec3[], tvecs: Vec3[], distCoeffs: number[], stdDeviationsIntrinsics: Mat, stdDeviationsExtrinsics: Mat, perViewErrors: number[] }>;
  export function canny(dx: Mat, dy: Mat, threshold1: number, threshold2: number, L2gradient?: boolean): Mat;
  export function cartToPolar(x: Mat, y: Mat, angleInDegrees?: boolean): { magnitude: Mat, angle: Mat };
  export function cartToPolarAsync(x: Mat, y: Mat, angleInDegrees?: boolean): Promise<{ magnitude: Mat, angle: Mat }>;
  export function composeRT(rvec1: Vec3, tvec1: Vec3, rvec2: Vec3, tvec2: Vec3): { rvec3: Vec3, tvec3: Vec3, dr3dr1: Mat, dr3dt1: Mat, dr3dr2: Mat, dr3dt2: Mat, dt3dr1: Mat, dt3dt1: Mat, dt3dr2: Mat, dt3dt2: Mat };
  export function composeRTAsync(rvec1: Vec3, tvec1: Vec3, rvec2: Vec3, tvec2: Vec3): Promise<{ rvec3: Vec3, tvec3: Vec3, dr3dr1: Mat, dr3dt1: Mat, dr3dr2: Mat, dr3dt2: Mat, dt3dr1: Mat, dt3dt1: Mat, dt3dr2: Mat, dt3dt2: Mat }>;
  export function computeCorrespondEpilines(points: Point2[], whichImage: number, F: Mat): Vec3[];
  export function computeCorrespondEpilinesAsync(points: Point2[], whichImage: number, F: Mat): Promise<Vec3[]>;
  export function convertScaleAbs(mat: Mat, alpha: number, beta: number): Mat;
  export function convertScaleAbsAsync(mat: Mat, alpha: number, beta: number): Promise<Mat>;
  export function countNonZero(mat: Mat): number;
  export function countNonZeroAsync(mat: Mat): Promise<number>;
  export function createOCRHMMTransitionsTable(vocabulary: string, lexicon: string[]): Mat;
  export function createOCRHMMTransitionsTableAsync(vocabulary: string, lexicon: string[]): Promise<Mat>;
  export function destroyAllWindows(): void;
  export function destroyWindow(winName: string): void;
  export function drawKeyPoints(img: Mat, keyPoints: KeyPoint[]): Mat;
  export function drawMatches(img1: Mat, img2: Mat, keyPoints1: KeyPoint[], keyPoints2: KeyPoint[], matches: DescriptorMatch[]): Mat;
  export function eigen(mat: Mat): Mat;
  export function eigenAsync(mat: Mat): Promise<Mat>;
  export function estimateAffine2D(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): { out: Mat, inliers: Mat };
  export function estimateAffine2DAsync(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): Promise<{ out: Mat, inliers: Mat }>;
  export function estimateAffine3D(src: Point3[], dst: Point3[], ransacThreshold?: number, confidence?: number): { returnValue: number, out: Mat, inliers: Mat };
  export function estimateAffine3D(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): { out: Mat, inliers: Mat };
  export function estimateAffine3DAsync(src: Point3[], dst: Point3[], ransacThreshold?: number, confidence?: number): Promise<{ returnValue: number, out: Mat, inliers: Mat }>;
  export function estimateAffine3DAsync(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): Promise<{ out: Mat, inliers: Mat }>;
  export function estimateAffinePartial2D(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): { out: Mat, inliers: Mat };
  export function estimateAffinePartial2DAsync(from: Point2[], to: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number, refineIters?: number): Promise<{ out: Mat, inliers: Mat }>;
  export function fastNlMeansDenoisingColored(src: Mat, h?: number, hColor?: number, templateWindowSize?: number, searchWindowSize?: number): Mat;
  export function inpaint(src: Mat, mask: Mat, inpaintRadius: number, flags: number): Mat;
  export function inpaintAsync(src: Mat, mask: Mat, inpaintRadius: number, flags: number): Promise<Mat>;
  export function findEssentialMat(points1: Point2[], points2: Point2[], focal?: number, pp?: Point2, method?: number, prob?: number, threshold?: number): { E: Mat, mask: Mat };
  export function findEssentialMatAsync(points1: Point2[], points2: Point2[], focal?: number, pp?: Point2, method?: number, prob?: number, threshold?: number): Promise<{ E: Mat, mask: Mat }>;
  export function findFundamentalMat(points1: Point2[], points2: Point2[], method?: number, param1?: number, param2?: number): { F: Mat, mask: Mat };
  export function findFundamentalMatAsync(points1: Point2[], points2: Point2[], method?: number, param1?: number, param2?: number): Promise<{ F: Mat, mask: Mat }>;
  export function findHomography(srcPoints: Point2[], dstPoints: Point2[], method?: number, ransacReprojThreshold?: number, maxIters?: number, confidence?: number): { homography: Mat, mask: Mat };
  export function findNonZero(mat: Mat): Point2[];
  export function findNonZeroAsync(mat: Mat): Promise<Point2[]>;
  export function fitLine(points: Point2[], distType: number, param: number, reps: number, aeps: number): number[];
  export function fitLine(points: Point3[], distType: number, param: number, reps: number, aeps: number): number[];
  export function gaussianBlur(mat: Mat, kSize: Size, sigmaX: number, sigmaY?: number, borderType?: number): Mat;
  export function gaussianBlurAsync(mat: Mat, kSize: Size, sigmaX: number, sigmaY?: number, borderType?: number): Promise<Mat>;
  export function getAffineTransform(srcPoints: Point2[], dstPoints: Point2[]): Mat;
  export function getBuildInformation(): string;
  export function getPerspectiveTransform(srcPoints: Point2[], dstPoints: Point2[]): Mat;
  export function getRotationMatrix2D(center: Point2, angle: number, scale?: number): Mat;
  export function getStructuringElement(shape: number, kernelSize: Size, anchor?: Point2): Mat;
  export function getTextSize(text: string, fontFace: number, fontScale: number, thickness: number): { size: Size, baseLine: number };
  export function getTextSizeAsync(text: string, fontFace: number, fontScale: number, thickness: number): Promise<{ size: Size, baseLine: number }>;
  export function getValidDisparityROI(roi1: Rect[], roi2: Rect[], minDisparity: number, numberOfDisparities: number, SADWindowSize: number): Rect;
  export function getValidDisparityROIAsync(roi1: Rect[], roi2: Rect[], minDisparity: number, numberOfDisparities: number, SADWindowSize: number): Promise<Rect>;
  export function goodFeaturesToTrack(mat: Mat, maxCorners: number, qualityLevel: number, minDistance: number, mask?: Mat, blockSize?: number, gradientSize?: number, useHarrisDetector?: boolean, harrisK?: number): Point2[];
  export function goodFeaturesToTrackAsync(mat: Mat, maxCorners: number, qualityLevel: number, minDistance: number, mask?: Mat, blockSize?: number, gradientSize?: number, useHarrisDetector?: boolean, harrisK?: number): Promise<Point2[]>;
  export function imdecode(buffer: Buffer, flags?: number): Mat;
  export function imdecodeAsync(buffer: Buffer, flags?: number): Promise<Mat>;
  export function imencode(fileExt: string, img: Mat, flags?: number[]): Buffer;
  export function imencodeAsync(fileExt: string, img: Mat, flags?: number[]): Promise<Buffer>;
  export function imread(filePath: string, flags?: number): Mat;
  export function imreadAsync(filePath: string, flags?: number): Promise<Mat>;
  export function imshow(winName: string, img: Mat): void;
  export function imshowWait(winName: string, img: Mat): void;
  export function imwrite(filePath: string, img: Mat, flags?: number[]): void;
  export function imwriteAsync(filePath: string, img: Mat, flags?: number[]): Promise<void>;
  export function initCameraMatrix2D(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, aspectRatio?: number): Mat;
  export function initCameraMatrix2DAsync(objectPoints: Point3[], imagePoints: Point2[], imageSize: Size, aspectRatio?: number): Promise<Mat>;
  export function kmeans(data: Point2[], k: number, attempts: number, termCriteria: TermCriteria, flags: number): { labels: number[], centers: Point2[] };
  export function kmeans(data: Point3[], k: number, attempts: number, termCriteria: TermCriteria, flags: number): { labels: number[], centers: Point3[] };
  export function loadOCRHMMClassifierCNN(file: string): OCRHMMClassifier;
  export function loadOCRHMMClassifierCNNAsync(file: string): Promise<OCRHMMClassifier>;
  export function loadOCRHMMClassifierNM(file: string): OCRHMMClassifier;
  export function loadOCRHMMClassifierNMAsync(file: string): Promise<OCRHMMClassifier>;
  export function matchBruteForce(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchBruteForceAsync(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchBruteForceHamming(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchBruteForceHammingAsync(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchBruteForceHammingLut(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchBruteForceHammingLutAsync(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchBruteForceL1(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchBruteForceL1Async(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchBruteForceSL2(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchBruteForceSL2Async(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchFlannBased(descriptors1: Mat, descriptors2: Mat): DescriptorMatch[];
  export function matchFlannBasedAsync(descriptors1: Mat, descriptors2: Mat): Promise<DescriptorMatch[]>;
  export function matchKnnBruteForce(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnBruteForceAsync(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function matchKnnBruteForceHamming(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnBruteForceHammingAsync(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function matchKnnBruteForceHammingLut(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnBruteForceHammingLutAsync(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function matchKnnBruteForceL1(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnBruteForceL1Async(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function matchKnnBruteForceSL2(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnBruteForceSL2Async(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function matchKnnFlannBased(descriptors1: Mat, descriptors2: Mat, k: number): DescriptorMatch[][];
  export function matchKnnFlannBasedAsync(descriptors1: Mat, descriptors2: Mat, k: number): Promise<DescriptorMatch[][]>;
  export function mean(mat: Mat): Vec4;
  export function meanAsync(mat: Mat): Promise<Vec4>;
  export function meanStdDev(mat: Mat, mask?: Mat): { mean: Mat, stddev: Mat };
  export function meanStdDevAsync(mat: Mat, mask?: Mat): Promise<{ mean: Mat, stddev: Mat }>;
  export function medianBlur(mat: Mat, kSize: number): Mat;
  export function medianBlurAsync(mat: Mat, kSize: number): Promise<Mat>;
  export function minMaxLoc(mat: Mat, mask?: Mat): { minVal: number, maxVal: number, minLoc: Point2, maxLoc: Point2 };
  export function minMaxLocAsync(mat: Mat, mask?: Mat): Promise<{ minVal: number, maxVal: number, minLoc: Point2, maxLoc: Point2 }>;
  export function moveWindow(winName: string, x: number, y: number): void;
  export function mulSpectrums(mat: Mat, mat2: Mat, dftRows?: boolean, conjB?: boolean): Mat;
  export function mulSpectrumsAsync(mat: Mat, mat2: Mat, dftRows?: boolean, conjB?: boolean): Promise<Mat>;
  export function partition(data: Point2[], predicate: (pt1: Point2, pt2: Point2) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Point3[], predicate: (pt1: Point3, pt2: Point3) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Vec2[], predicate: (vec1: Vec2, vec2: Vec2) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Vec3[], predicate: (vec1: Vec3, vec2: Vec3) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Vec4[], predicate: (vec1: Vec4, vec2: Vec4) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Vec6[], predicate: (vec1: Vec6, vec2: Vec6) => boolean): { labels: number[], numLabels: number };
  export function partition(data: Mat[], predicate: (mat1: Mat, mat2: Mat) => boolean): { labels: number[], numLabels: number };
  export function perspectiveTransform(mat: Mat, m: Mat): Mat;
  export function perspectiveTransformAsync(mat: Mat, m: Mat): Promise<Mat>;
  export function plot1DHist(hist: Mat, plotImg: Mat, color: Vec3, lineType?: number, thickness?: number, shift?: number): Mat;
  export function polarToCart(magnitude: Mat, angle: Mat, angleInDegrees?: boolean): { x: Mat, y: Mat };
  export function polarToCartAsync(magnitude: Mat, angle: Mat, angleInDegrees?: boolean): Promise<{ x: Mat, y: Mat }>;
  export function getNumThreads(): number;
  export function setNumThreads(nthreads: number): void;
  export function getThreadNum(): number;
  export function projectPoints(objectPoints: Point3[], imagePoints: Point2[], rvec: Vec3, tvec: Vec3, cameraMatrix: Mat, distCoeffs: number[], aspectRatio?: number): { imagePoints: Point2[], jacobian: Mat };
  export function projectPointsAsync(objectPoints: Point3[], imagePoints: Point2[], rvec: Vec3, tvec: Vec3, cameraMatrix: Mat, distCoeffs: number[], aspectRatio?: number): Promise<{ imagePoints: Point2[], jacobian: Mat }>;
  export function readNetFromCaffe(prototxt: string, modelPath?: string): Net;
  export function readNetFromCaffeAsync(prototxt: string, modelPath?: string): Promise<Net>;
  export function readNetFromTensorflow(modelPath: string, config?: string): Net;
  export function readNetFromTensorflowAsync(modelPath: string): Promise<Net>;
  export function readNetFromDarknet(cfgPath: string, modelPath: string): Net;
  export function readNetFromDarknetAsync(cfgPath: string, modelPath: string): Promise<Net>;
  export function recoverPose(E: Mat, points1: Point2[], points2: Point2[], focal?: number, pp?: Point2, mask?: Mat): { returnValue: number, R: Mat, T: Vec3 };
  export function recoverPoseAsync(E: Mat, points1: Point2[], points2: Point2[], focal?: number, pp?: Point2, mask?: Mat): Promise<{ returnValue: number, R: Mat, T: Vec3 }>;
  export function reduce(mat: Mat, dim: number, rtype: number, dtype?: number): Mat;
  export function reduceAsync(mat: Mat, dim: number, rtype: number, dtype?: number): Promise<Mat>;
  export function sampsonDistance(pt1: Vec2, pt2: Vec2, F: Mat): number;
  export function sampsonDistanceAsync(pt1: Vec2, pt2: Vec2, F: Mat): Promise<number>;
  export function seamlessClone(src: Mat, dst: Mat, mask: Mat, p: Point2, flags: number): Mat;
  export function seamlessCloneAsync(src: Mat, dst: Mat, mask: Mat, p: Point2, flags: number): Promise<Mat>;
  export function solve(mat: Mat, mat2: Mat, flags?: number): Mat;
  export function solveAsync(mat: Mat, mat2: Mat, flags?: number): Promise<Mat>;
  export function solveP3P(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], flags?: number): { returnValue: boolean, rvecs: Mat[], tvecs: Mat[] };
  export function solveP3PAsync(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], flags?: number): Promise<{ returnValue: boolean, rvecs: Mat[], tvecs: Mat[] }>;
  export function solvePnP(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], useExtrinsicGuess?: boolean, flags?: number): { returnValue: boolean, rvec: Vec3, tvec: Vec3 };
  export function solvePnP(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], useExtrinsicGuess?: boolean, iterationsCount?: number, reprojectionError?: number, confidence?: number, flags?: number): { returnValue: boolean, rvec: Vec3, tvec: Vec3, inliers: number[] };
  export function solvePnPAsync(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], useExtrinsicGuess?: boolean, flags?: number): Promise<{ returnValue: boolean, rvec: Vec3, tvec: Vec3 }>;
  export function solvePnPAsync(objectPoints: Point3[], imagePoints: Point2[], cameraMatrix: Mat, distCoeffs: number[], useExtrinsicGuess?: boolean, iterationsCount?: number, reprojectionError?: number, confidence?: number, flags?: number): Promise<{ returnValue: boolean, rvec: Vec3, tvec: Vec3, inliers: number[] }>;
  export function split(mat: Mat): Mat[];
  export function splitAsync(mat: Mat): Promise<Mat[]>;
  export function stereoCalibrate(objectPoints: Point3[], imagePoints1: Point2[], imagePoints2: Point2[], cameraMatrix1: Mat, distCoeffs1: number[], cameraMatrix2: Mat, distCoeffs2: number[], imageSize: Size, flags?: number, criteria?: TermCriteria): { returnValue: number, R: Mat, T: Vec3[], E: Mat, F: Mat, distCoeffs1: number[], distCoeffs2: number[] };
  export function stereoCalibrateAsync(objectPoints: Point3[], imagePoints1: Point2[], imagePoints2: Point2[], cameraMatrix1: Mat, distCoeffs1: number[], cameraMatrix2: Mat, distCoeffs2: number[], imageSize: Size, flags?: number, criteria?: TermCriteria): Promise<{ returnValue: number, R: Mat, T: Vec3[], E: Mat, F: Mat, distCoeffs1: number[], distCoeffs2: number[] }>;
  export function stereoRectifyUncalibrated(points1: Point2[], points2: Point2[], F: Mat, imageSize: Size, threshold?: number): { returnValue: boolean, H1: Mat, H2: Mat };
  export function stereoRectifyUncalibratedAsync(points1: Point2[], points2: Point2[], F: Mat, imageSize: Size, threshold?: number): Promise<{ returnValue: boolean, H1: Mat, H2: Mat }>;
  export function sum(mat: Mat): number;
  export function sum(mat: Mat): Vec2;
  export function sum(mat: Mat): Vec3;
  export function sum(mat: Mat): Vec4;
  export function sumAsync(mat: Mat): Promise<number>;
  export function sumAsync(mat: Mat): Promise<Vec2>;
  export function sumAsync(mat: Mat): Promise<Vec3>;
  export function sumAsync(mat: Mat): Promise<Vec4>;
  export function transform(mat: Mat, m: Mat): Mat;
  export function transformAsync(mat: Mat, m: Mat): Promise<Mat>;
  export function undistortPoints(srcPoints: Point2[], cameraMatrix: Mat, distCoeffs: Mat): Point2[];
  export function undistortPointsAsync(srcPoints: Point2[], cameraMatrix: Mat, distCoeffs: Mat): Promise<Point2[]>;
  export function waitKey(delay?: number): number;
  export function waitKeyEx(delay?: number): number;

  export type DrawParams = {
    thickness?: number;
    lineType?: number;
    color?: Vec3;
  }

  export interface DrawDetectionParams extends DrawParams {
    segmentFraction?: number;
  }

  export interface FontParams extends DrawParams {
    fontType?: number;
    fontSize?: number;
  }

  export interface TextLine extends FontParams {
    text: string;
  }

  export function drawDetection(img: Mat, inputRect: Rect, opts?: DrawDetectionParams): Rect;
  export function drawTextBox(img: Mat, upperLeft: { x: number, y: number }, textLines: TextLine[], alpha: number): Mat;

  export function isCustomMatAllocatorEnabled(): boolean;
  export function dangerousEnableCustomMatAllocator(): boolean;
  export function dangerousDisableCustomMatAllocator(): boolean;
  export function getMemMetrics(): { TotalAlloc: number, TotalKnownByJS: number, NumAllocations: number, NumDeAllocations: number };
