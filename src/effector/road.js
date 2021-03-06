import { Sequence } from "./sequence";
import { PlaneGeometry, Mesh, MeshBasicMaterial, RepeatWrapping, MeshPhongMaterial, DoubleSide, MeshStandardMaterial, Line, Geometry, Vector3, LineBasicMaterial } from "three";
import { Assets } from "../3dview/Asset";
var pts = [
    {
        "x": -1438.9428,
        "y": -1571.2403
    },
    {
        "x": -1507.49275,
        "y": -1415.799
    },
    {
        "x": -1541.87848,
        "y": -1306.02916
    },
    {
        "x": -1852.41826,
        "y": -816.37113
    },
    {
        "x": -1852.41826,
        "y": -788.66983
    },
    {
        "x": -743.39609,
        "y": -583.50366
    },
    {
        "x": -757.52164,
        "y": -587.75175
    },
    {
        "x": -773.77963,
        "y": -591.67339
    },
    {
        "x": -792.29598,
        "y": -594.78627
    },
    {
        "x": -879.70798,
        "y": -609.48153
    },
    {
        "x": -1177.71269,
        "y": -580.091
    },
    {
        "x": -1177.71269,
        "y": -580.091
    },
    {
        "x": -1265.26937,
        "y": -606.90033
    },
    {
        "x": -1420.19034,
        "y": -656.95172
    },
    {
        "x": -1634.95812,
        "y": -721.00767
    },
    {
        "x": -1826.84261,
        "y": -775.57142
    },
    {
        "x": -2085.14286,
        "y": -878.78315
    },
    {
        "x": -2124.72857,
        "y": -656.95172
    },
    {
        "x": -1972.81593,
        "y": -594.78627
    },
    {
        "x": -1216.31016,
        "y": -500.98618
    },
    {
        "x": -1210.43415,
        "y": -477.18249
    },
    {
        "x": -1569.80907,
        "y": -1229.35451
    },
    {
        "x": -1533.07091,
        "y": -1278.78404
    },
    {
        "x": -1494.3336,
        "y": -1394.92222
    },
    {
        "x": -1420.19034,
        "y": -1571.2403
    },
    {
        "x": -1018.64487,
        "y": -1235.52977
    },
    {
        "x": -1087.28921,
        "y": -1106.73834
    },
    {
        "x": -1021.66587,
        "y": -1231.50178
    },
    {
        "x": -702.57694,
        "y": -1036.10937
    },
    {
        "x": -538.47304,
        "y": -934.62019
    },
    {
        "x": -350.79735,
        "y": -829.53898
    },
    {
        "x": -293.34542,
        "y": -811.26293
    },
    {
        "x": -226.23545,
        "y": -731.14555
    },
    {
        "x": -130.34111,
        "y": -663.58682
    },
    {
        "x": -1947.00802,
        "y": -1572.8234
    },
    {
        "x": -1460.9083,
        "y": -1254.48801
    },
    {
        "x": -1108.60178,
        "y": -1036.10937
    },
    {
        "x": -819.96775,
        "y": -848.75044
    },
    {
        "x": -659.48736,
        "y": -744.30808
    },
    {
        "x": -408.1157,
        "y": -583.50366
    },
    {
        "x": 661.59802,
        "y": 96.59601
    },
    {
        "x": 549.41255,
        "y": 26.42
    },
    {
        "x": 512.40208,
        "y": 100.44094
    },
    {
        "x": 403.42067,
        "y": -68.94529
    },
    {
        "x": 391.25745,
        "y": -53.19793
    },
    {
        "x": 369.22274,
        "y": -59.78912
    },
    {
        "x": 352.70455,
        "y": -53.19793
    },
    {
        "x": 339.73144,
        "y": -26.51825
    },
    {
        "x": 320.93396,
        "y": 2.78599
    },
    {
        "x": 391.25745,
        "y": -53.19793
    },
    {
        "x": 391.25745,
        "y": -37.12412
    },
    {
        "x": 391.25745,
        "y": -33.40358
    },
    {
        "x": 367.2293,
        "y": 10.54534
    },
    {
        "x": 331.21358,
        "y": -10.26979
    },
    {
        "x": 345.93426,
        "y": -37.12412
    },
    {
        "x": 365.14765,
        "y": -25.87592
    },
    {
        "x": 362.82109,
        "y": -6.86603
    },
    {
        "x": 661.59802,
        "y": 96.59601
    },
    {
        "x": 727.88735,
        "y": 114.75434
    },
    {
        "x": 727.88735,
        "y": 114.75434
    },
    {
        "x": 735.00924,
        "y": 126.50095
    },
    {
        "x": 741.66413,
        "y": 126.50095
    },
    {
        "x": 748.31901,
        "y": 126.50095
    },
    {
        "x": 755.024,
        "y": 115.971
    },
    {
        "x": 752.09268,
        "y": 111.85131
    },
    {
        "x": 750.67316,
        "y": 109.85631
    },
    {
        "x": 744.95298,
        "y": 106.95875
    },
    {
        "x": 739.42944,
        "y": 108.12683
    },
    {
        "x": 733.54682,
        "y": 109.37084
    },
    {
        "x": 727.88735,
        "y": 114.75434
    },
    {
        "x": 727.88735,
        "y": 114.75434
    },
    {
        "x": 752.09268,
        "y": 111.85131
    },
    {
        "x": 790.03064,
        "y": 89.88305
    },
    {
        "x": 792.8905,
        "y": 87.63601
    },
    {
        "x": 790.20281,
        "y": 174.4311
    },
    {
        "x": 747.85122,
        "y": 121.9939
    },
    {
        "x": 790.20281,
        "y": 174.4311
    },
    {
        "x": 792.8905,
        "y": 168.86571
    },
    {
        "x": 792.8905,
        "y": 168.86571
    },
    {
        "x": 824.47516,
        "y": 173.41143
    },
    {
        "x": 861.61591,
        "y": 178.22981
    },
    {
        "x": 892.28325,
        "y": 182.20837
    },
    {
        "x": 926.29098,
        "y": 187.23369
    },
    {
        "x": 953.38403,
        "y": 182.44365
    },
    {
        "x": 1013.28906,
        "y": 171.85246
    },
    {
        "x": 1032.51063,
        "y": 126.50095
    },
    {
        "x": 1032.51063,
        "y": 126.50095
    },
    {
        "x": 1064.48423,
        "y": 148.82421
    },
    {
        "x": 1044.74256,
        "y": 148.82421
    },
    {
        "x": 1032.51063,
        "y": 137.25419
    },
    {
        "x": 1044.74256,
        "y": 148.82421
    },
    {
        "x": 1044.74256,
        "y": 59.7181
    },
    {
        "x": 1044.74256,
        "y": 121.9939
    },
    {
        "x": 1058.23288,
        "y": 118.28225
    },
    {
        "x": 1092.15508,
        "y": 72.81456
    },
    {
        "x": 1029.64886,
        "y": 54.88119
    },
    {
        "x": 1076.74357,
        "y": 72.81456
    },
    {
        "x": 1130.71134,
        "y": 76.0466
    },
    {
        "x": 1044.74256,
        "y": 59.7181
    },
    {
        "x": 1107.58866,
        "y": 47.55652
    },
    {
        "x": 1112.9938,
        "y": 40.80009
    },
    {
        "x": 1133.05777,
        "y": 37.59015
    },
    {
        "x": 1133.05777,
        "y": 50.81996
    },
    {
        "x": 1158.26799,
        "y": 38.75086
    },
    {
        "x": 1168.53949,
        "y": 18.20786
    },
    {
        "x": 1179.44072,
        "y": 10.54534
    },
    {
        "x": 1186.4549,
        "y": 8.17523
    },
    {
        "x": 245.56129,
        "y": -1567.93152
    },
    {
        "x": 248.52515,
        "y": -1554.26248
    },
    {
        "x": 272.11461,
        "y": -1367.86022
    },
    {
        "x": 303.32141,
        "y": -1246.88306
    },
    {
        "x": 307.14792,
        "y": -1232.04912
    },
    {
        "x": 321.37885,
        "y": -1193.99544
    },
    {
        "x": 333.39667,
        "y": -1162.70144
    },
    {
        "x": 351.53983,
        "y": -1115.88465
    },
    {
        "x": 348.87814,
        "y": -1093.1023
    },
    {
        "x": 342.37357,
        "y": -1030.18445
    },
    {
        "x": 336.16791,
        "y": -1020.7821
    },
    {
        "x": 320.60723,
        "y": -997.20574
    },
    {
        "x": 299.93447,
        "y": -965.52592
    },
    {
        "x": 297.46971,
        "y": -964.46258
    },
    {
        "x": 293.58749,
        "y": -962.78772
    },
    {
        "x": 283.56371,
        "y": -945.61222
    },
    {
        "x": 278.7994,
        "y": -942.48629
    },
    {
        "x": 274.82039,
        "y": -939.87561
    },
    {
        "x": 270.59192,
        "y": -933.31341
    },
    {
        "x": 266.18739,
        "y": -929.87428
    },
    {
        "x": 219.58119,
        "y": -893.48337
    },
    {
        "x": 153.15626,
        "y": -819.71742
    },
    {
        "x": 151.59613,
        "y": -818.32877
    },
    {
        "x": 146.57726,
        "y": -813.86157
    },
    {
        "x": 143.68917,
        "y": -810.21578
    },
    {
        "x": 138.59395,
        "y": -805.66406
    },
    {
        "x": 133.78133,
        "y": -801.36479
    },
    {
        "x": 126.77357,
        "y": -796.17777
    },
    {
        "x": 121.63903,
        "y": -791.36432
    },
    {
        "x": 114.7463,
        "y": -784.90264
    },
    {
        "x": 105.9561,
        "y": -776.9461
    },
    {
        "x": 101.61996,
        "y": -770.70994
    },
    {
        "x": 82.84923,
        "y": -743.71417
    },
    {
        "x": 80.74291,
        "y": -726.76519
    },
    {
        "x": 79.19433,
        "y": -724.71211
    },
    {
        "x": 140.69607,
        "y": -816.37113
    },
    {
        "x": 126.26287,
        "y": -801.1708
    },
    {
        "x": 81.73079,
        "y": -773.2791
    },
    {
        "x": 53.62624,
        "y": -739.16699
    },
    {
        "x": 48.18875,
        "y": -732.56721
    },
    {
        "x": 43.15276,
        "y": -726.23822
    },
    {
        "x": 38.77262,
        "y": -720.42177
    },
    {
        "x": 30.09144,
        "y": -708.89392
    },
    {
        "x": 23.98652,
        "y": -699.37938
    },
    {
        "x": 22.43814,
        "y": -693.7602
    },
    {
        "x": 15.05865,
        "y": -666.97942
    },
    {
        "x": 45.91845,
        "y": -654.75158
    },
    {
        "x": 61.35351,
        "y": -663.58682
    },
    {
        "x": 76.78857,
        "y": -672.42206
    },
    {
        "x": 82.52327,
        "y": -731.14555
    },
    {
        "x": 82.52327,
        "y": -731.14555
    },
    {
        "x": 125.72494,
        "y": -781.92608
    },
    {
        "x": 242.18108,
        "y": -885.91032
    },
    {
        "x": -53.97263,
        "y": -654.24394
    },
    {
        "x": -72.54589,
        "y": -637.29924
    },
    {
        "x": -94.94973,
        "y": -629.03869
    },
    {
        "x": -91.35904,
        "y": -631.09887
    },
    {
        "x": -86.89995,
        "y": -644.56725
    },
    {
        "x": -60.75119,
        "y": -648.37156
    },
    {
        "x": -77.96053,
        "y": -644.56725
    },
    {
        "x": -102.81557,
        "y": -648.37156
    },
    {
        "x": -109.59868,
        "y": -654.24394
    },
    {
        "x": -108.19036,
        "y": -658.88184
    },
    {
        "x": -148.21266,
        "y": -788.66983
    },
    {
        "x": -248.2554,
        "y": -753.70884
    },
    {
        "x": -114.85163,
        "y": -660.41079
    },
    {
        "x": -94.94973,
        "y": -691.09391
    },
    {
        "x": -112.60902,
        "y": -735.49297
    },
    {
        "x": -133.23917,
        "y": -744.30808
    },
    {
        "x": -130.34111,
        "y": -762.74004
    },
    {
        "x": -141.30932,
        "y": -775.57142
    },
    {
        "x": -148.21266,
        "y": -788.66983
    },
    {
        "x": -160.85695,
        "y": -805.66406
    },
    {
        "x": -153.4519,
        "y": -794.0678
    },
    {
        "x": -232.90831,
        "y": -770.70994
    },
    {
        "x": -252.25791,
        "y": -759.37945
    },
    {
        "x": -350.79735,
        "y": -912.7962
    },
    {
        "x": -332.0508,
        "y": -856.32668
    },
    {
        "x": -350.79735,
        "y": -829.53898
    },
    {
        "x": -343.97214,
        "y": -872.6401
    },
    {
        "x": -388.28903,
        "y": -856.32668
    },
    {
        "x": -232.90831,
        "y": -893.1464
    },
    {
        "x": -259.14912,
        "y": -953.95941
    },
    {
        "x": -305.58473,
        "y": -981.59685
    },
    {
        "x": -408.1157,
        "y": -973.57866
    },
    {
        "x": -408.1157,
        "y": -995.86212
    },
    {
        "x": -388.28903,
        "y": -993.57506
    },
    {
        "x": -420.22127,
        "y": -995.86212
    },
    {
        "x": -432.51798,
        "y": -989.09443
    },
    {
        "x": -420.22127,
        "y": -995.86212
    },
    {
        "x": -441.74051,
        "y": -1020.7821
    },
    {
        "x": -441.74051,
        "y": -1038.51774
    },
    {
        "x": -408.1157,
        "y": -1065.00297
    },
    {
        "x": -388.28903,
        "y": -989.09443
    },
    {
        "x": -391.3713,
        "y": -1062.63821
    },
    {
        "x": -332.0508,
        "y": -1475.56287
    },
    {
        "x": -113.40968,
        "y": -1567.93152
    },
    {
        "x": -133.23917,
        "y": -1567.93152
    },
    {
        "x": -314.49583,
        "y": -1494.71687
    },
    {
        "x": -76.59225,
        "y": -1569.54154
    },
    {
        "x": -350.79735,
        "y": -1454.42337
    },
    {
        "x": -503.83314,
        "y": -1357.56696
    },
    {
        "x": -592.20176,
        "y": -1168.58665
    },
    {
        "x": -604.70467,
        "y": -1160.93658
    },
    {
        "x": -214.71969,
        "y": -466.93798
    },
    {
        "x": -130.34111,
        "y": -600.36536
    },
    {
        "x": -91.35904,
        "y": -626.11463
    },
    {
        "x": -141.30932,
        "y": -594.78627
    },
    {
        "x": -141.30932,
        "y": -668.66263
    },
    {
        "x": -153.4519,
        "y": -425.19519
    },
    {
        "x": -55.7604,
        "y": -555.75131
    },
    {
        "x": -94.94973,
        "y": -386.54756
    },
    {
        "x": -66.25449,
        "y": -420.10783
    },
    {
        "x": -102.81557,
        "y": -485.94198
    },
    {
        "x": -63.91786,
        "y": -435.80218
    },
    {
        "x": -46.51792,
        "y": -425.19519
    },
    {
        "x": -15.64768,
        "y": -438.08121
    },
    {
        "x": -46.51792,
        "y": -425.19519
    },
    {
        "x": -46.51792,
        "y": -425.19519
    },
    {
        "x": -47.90917,
        "y": -421.54396
    },
    {
        "x": -51.09127,
        "y": -420.10783
    },
    {
        "x": -55.618,
        "y": -418.06485
    },
    {
        "x": -62.56103,
        "y": -418.21612
    },
    {
        "x": -63.91786,
        "y": -420.10783
    },
    {
        "x": -65.31583,
        "y": -422.0569
    },
    {
        "x": -68.73847,
        "y": -428.57495
    },
    {
        "x": -66.25449,
        "y": -433.19434
    },
    {
        "x": -64.63284,
        "y": -436.21009
    },
    {
        "x": -57.65607,
        "y": -438.37067
    },
    {
        "x": -55.7604,
        "y": -438.08121
    },
    {
        "x": -50.961,
        "y": -437.34838
    },
    {
        "x": -46.51792,
        "y": -425.19519
    },
    {
        "x": -46.51792,
        "y": -425.19519
    },
    {
        "x": -32.95341,
        "y": -402.50099
    },
    {
        "x": -53.97263,
        "y": -416.18125
    },
    {
        "x": -46.51792,
        "y": -398.67167
    },
    {
        "x": -46.51792,
        "y": -398.67167
    },
    {
        "x": -38.21241,
        "y": -402.68314
    },
    {
        "x": -32.95341,
        "y": -402.50099
    },
    {
        "x": -29.19526,
        "y": -402.37083
    },
    {
        "x": -26.85556,
        "y": -396.86876
    },
    {
        "x": -26.39496,
        "y": -395.70932
    },
    {
        "x": -25.28982,
        "y": -392.9274
    },
    {
        "x": -36.05307,
        "y": -385.46891
    },
    {
        "x": -41.92888,
        "y": -386.54756
    },
    {
        "x": -47.8047,
        "y": -387.62621
    },
    {
        "x": -46.51792,
        "y": -397.19378
    },
    {
        "x": -46.51792,
        "y": -397.19378
    },
    {
        "x": -26.39496,
        "y": -391.32091
    },
    {
        "x": -23.01465,
        "y": -376.57599
    },
    {
        "x": -26.39496,
        "y": -373.23696
    },
    {
        "x": -37.84993,
        "y": -385.21379
    },
    {
        "x": -24.34139,
        "y": -374.94364
    },
    {
        "x": -18.00714,
        "y": -364.02817
    },
    {
        "x": -51.09127,
        "y": -548.35702
    },
    {
        "x": -2.6231,
        "y": -397.19378
    },
    {
        "x": -2.6231,
        "y": -380.69514
    },
    {
        "x": -12.87901,
        "y": -367.76377
    },
    {
        "x": -37.84993,
        "y": -349.48149
    },
    {
        "x": -29.13999,
        "y": -525.59053
    },
    {
        "x": 36.69515,
        "y": -333.19934
    },
    {
        "x": 28.78942,
        "y": -305.52927
    },
    {
        "x": 408.72784,
        "y": -747.64922
    },
    {
        "x": 324.30044,
        "y": -700.82134
    },
    {
        "x": 329.55325,
        "y": -691.09391
    },
    {
        "x": 391.25745,
        "y": -735.49297
    },
    {
        "x": 425.7556,
        "y": -668.66263
    },
    {
        "x": 491.56331,
        "y": -704.18945
    },
    {
        "x": 441.84463,
        "y": -770.70994
    },
    {
        "x": 541.07551,
        "y": -731.14555
    },
    {
        "x": 491.56331,
        "y": -802.65858
    },
    {
        "x": -829.64137,
        "y": -447.83246
    },
    {
        "x": -990.32205,
        "y": -470.55723
    },
    {
        "x": -1127.97839,
        "y": -493.08197
    },
    {
        "x": -1216.31016,
        "y": -500.98618
    },
    {
        "x": -990.32205,
        "y": -367.76377
    },
    {
        "x": -1134.99604,
        "y": -373.23696
    },
    {
        "x": -1127.97839,
        "y": -447.83246
    },
    {
        "x": -1127.97839,
        "y": -447.83246
    },
    {
        "x": -1122.89555,
        "y": -466.93798
    },
    {
        "x": -1150.83941,
        "y": -477.18249
    },
    {
        "x": -1178.78328,
        "y": -487.427
    },
    {
        "x": -1210.43415,
        "y": -477.18249
    },
    {
        "x": -1210.43415,
        "y": -477.18249
    },
    {
        "x": -1336.74273,
        "y": -343.21096
    },
    {
        "x": -1492.04635,
        "y": -183.49839
    },
    {
        "x": 727.88735,
        "y": 365.66248
    },
    {
        "x": 541.07551,
        "y": 312.95262
    },
    {
        "x": 483.80965,
        "y": 287.81678
    },
    {
        "x": 217.74686,
        "y": 211.87496
    },
    {
        "x": 101.61996,
        "y": 199.73796
    },
    {
        "x": -187.09308,
        "y": 137.25419
    },
    {
        "x": -259.14912,
        "y": 108.12683
    },
    {
        "x": -293.34542,
        "y": 96.59601
    },
    {
        "x": -1378.77757,
        "y": -83.65347
    },
    {
        "x": -1655.68713,
        "y": -124.34014
    },
    {
        "x": -2222.38548,
        "y": -162.30626
    },
    {
        "x": -2341.37574,
        "y": -151.97128
    },
    {
        "x": -1658.59567,
        "y": -107.61603
    },
    {
        "x": -1384.46565,
        "y": -64.71504
    },
    {
        "x": -287.07302,
        "y": 128.49125
    },
    {
        "x": -275.62064,
        "y": 138.95556
    },
    {
        "x": -106.11264,
        "y": 166.73114
    },
    {
        "x": 144.44808,
        "y": 221.83139
    },
    {
        "x": 230.59654,
        "y": 241.03362
    },
    {
        "x": 505.8375,
        "y": 319.42924
    },
    {
        "x": 587.1888,
        "y": 340.56941
    },
    {
        "x": 670.47138,
        "y": 242.93454
    },
    {
        "x": 818.15081,
        "y": 286.11519
    },
    {
        "x": 894.67116,
        "y": 300.15031
    },
    {
        "x": 1037.96172,
        "y": 306.20332
    },
    {
        "x": 1130.71134,
        "y": 290.23988
    },
    {
        "x": 714.80228,
        "y": 241.03362
    },
    {
        "x": 766.50154,
        "y": 248.75074
    },
    {
        "x": 852.34926,
        "y": 255.79681
    },
    {
        "x": 1029.64886,
        "y": 255.79681
    },
    {
        "x": 1143.09962,
        "y": 241.03362
    },
    {
        "x": 441.84463,
        "y": 312.95262
    },
    {
        "x": 463.20955,
        "y": 283.1283
    },
    {
        "x": 493.91384,
        "y": 290.23988
    },
    {
        "x": 501.17751,
        "y": 310.75626
    },
    {
        "x": 506.69231,
        "y": 319.42924
    },
    {
        "x": 553.46957,
        "y": 317.7061
    },
    {
        "x": 578.96472,
        "y": 242.93454
    },
    {
        "x": 714.80228,
        "y": 241.03362
    },
    {
        "x": 714.80228,
        "y": 241.03362
    },
    {
        "x": 629.86317,
        "y": 197.97876
    },
    {
        "x": 572.92356,
        "y": 195.88058
    },
    {
        "x": 515.98395,
        "y": 193.7824
    },
    {
        "x": 487.04383,
        "y": 232.64091
    },
    {
        "x": 487.04383,
        "y": 232.64091
    },
    {
        "x": -931.77232,
        "y": -555.75131
    },
    {
        "x": -301.2892,
        "y": -176.25567
    },
    {
        "x": -592.20176,
        "y": -263.75544
    },
    {
        "x": -1314.96978,
        "y": -364.02817
    },
    {
        "x": 209.88378,
        "y": -985.50226
    },
    {
        "x": 164.58189,
        "y": -944.63709
    },
    {
        "x": 59.28654,
        "y": -774.11666
    },
    {
        "x": 59.28654,
        "y": -774.11666
    },
    {
        "x": 22.43814,
        "y": -739.16699
    },
    {
        "x": -6.49637,
        "y": -762.74004
    },
    {
        "x": -35.43087,
        "y": -786.31308
    },
    {
        "x": 10.9389,
        "y": -805.66406
    },
    {
        "x": 10.9389,
        "y": -805.66406
    },
    {
        "x": 2.63618,
        "y": -720.42177
    },
    {
        "x": 266.18739,
        "y": -970.32222
    },
    {
        "x": 278.7994,
        "y": -964.46258
    },
    {
        "x": 131.62669,
        "y": -829.53898
    },
    {
        "x": -32.95341,
        "y": -665.58077
    },
    {
        "x": -2.6231,
        "y": -720.42177
    },
    {
        "x": 14.58684,
        "y": -665.58077
    },
    {
        "x": 28.78942,
        "y": -668.66263
    },
    {
        "x": 560.15759,
        "y": -839.13368
    },
    {
        "x": 560.15759,
        "y": -839.13368
    },
    {
        "x": 701.77185,
        "y": -669.05216
    },
    {
        "x": 834.92824,
        "y": -500.98618
    },
    {
        "x": 841.44344,
        "y": -492.76289
    },
    {
        "x": 854.15582,
        "y": -485.59806
    },
    {
        "x": 861.61591,
        "y": -477.18249
    },
    {
        "x": 876.75452,
        "y": -460.10494
    },
    {
        "x": 887.48878,
        "y": -441.65324
    },
    {
        "x": 901.51641,
        "y": -425.19519
    },
    {
        "x": 945.67842,
        "y": -373.38166
    },
    {
        "x": 984.68316,
        "y": -325.11373
    },
    {
        "x": 1016.06125,
        "y": -284.54356
    },
    {
        "x": 1034.54014,
        "y": -260.65135
    },
    {
        "x": 1047.81671,
        "y": -244.05018
    },
    {
        "x": 1064.48423,
        "y": -212.76044
    },
    {
        "x": 1095.51197,
        "y": -154.51245
    },
    {
        "x": 1165.67646,
        "y": 90.56719
    },
    {
        "x": 1165.43416,
        "y": 89.88305
    },
    {
        "x": 1058.23288,
        "y": -250.56952
    },
    {
        "x": 1053.15642,
        "y": -258.81205
    },
    {
        "x": 1038.40353,
        "y": -276.77904
    },
    {
        "x": 1032.51063,
        "y": -284.54356
    },
    {
        "x": 994.2679,
        "y": -334.93234
    },
    {
        "x": 939.18418,
        "y": -397.22307
    },
    {
        "x": 939.18418,
        "y": -397.22307
    },
    {
        "x": 836.55954,
        "y": -524.36552
    },
    {
        "x": 743.34423,
        "y": -631.5836
    },
    {
        "x": 666.59669,
        "y": -724.71211
    },
    {
        "x": 609.6103,
        "y": -794.0678
    },
    {
        "x": 587.1888,
        "y": -823.03711
    },
    {
        "x": 604.45505,
        "y": -766.06748
    },
    {
        "x": 530.2625,
        "y": -721.00767
    },
    {
        "x": 470.56331,
        "y": -693.7602
    },
    {
        "x": 631.30723,
        "y": -721.00767
    },
    {
        "x": 568.56332,
        "y": -668.66263
    },
    {
        "x": 652.01339,
        "y": -704.18945
    },
    {
        "x": 549.41255,
        "y": -616.36743
    },
    {
        "x": 512.40208,
        "y": -600.36536
    },
    {
        "x": 475.39735,
        "y": -571.9746
    },
    {
        "x": 714.80228,
        "y": -629.03869
    },
    {
        "x": 496.84173,
        "y": -405.24032
    },
    {
        "x": 705.38836,
        "y": -508.43091
    },
    {
        "x": 670.47138,
        "y": -466.93798
    },
    {
        "x": 810.26907,
        "y": -528.91093
    },
    {
        "x": 798.14871,
        "y": -508.43091
    },
    {
        "x": 752.09268,
        "y": -455.73819
    },
    {
        "x": 877.5138,
        "y": -435.80218
    },
    {
        "x": 739.42944,
        "y": -311.68292
    },
    {
        "x": 752.09268,
        "y": -274.56874
    },
    {
        "x": 766.50154,
        "y": -205.06051
    },
    {
        "x": 842.41951,
        "y": -280.44125
    },
    {
        "x": 790.20281,
        "y": -231.42051
    },
    {
        "x": 1037.96172,
        "y": -236.91375
    },
    {
        "x": 943.94818,
        "y": -181.14621
    },
    {
        "x": 890.24662,
        "y": -134.53094
    },
    {
        "x": 834.92824,
        "y": -134.53094
    },
    {
        "x": 842.41951,
        "y": -120.4848
    },
    {
        "x": 810.26907,
        "y": -103.60387
    },
    {
        "x": 1158.26799,
        "y": 38.75086
    },
    {
        "x": 1184.43397,
        "y": 25.28581
    },
    {
        "x": 1152.31438,
        "y": -6.86603
    },
    {
        "x": 1155.28209,
        "y": 15.34139
    },
    {
        "x": 1165.43416,
        "y": 15.34139
    },
    {
        "x": 1155.28209,
        "y": 15.34139
    },
    {
        "x": 1143.09962,
        "y": 18.20786
    },
    {
        "x": 1133.05777,
        "y": 32.77906
    },
    {
        "x": 1133.05777,
        "y": 26.42
    },
    {
        "x": 1133.05777,
        "y": 104.7283
    },
    {
        "x": 1160.79187,
        "y": 128.49125
    },
    {
        "x": 877.5138,
        "y": 241.03362
    },
    {
        "x": 886.28912,
        "y": 199.73796
    },
    {
        "x": 861.61591,
        "y": 178.22981
    },
    {
        "x": 372.26133,
        "y": -0.05682
    },
    {
        "x": 336.16791,
        "y": -20.48444
    },
    {
        "x": 365.14765,
        "y": -25.87592
    },
    {
        "x": 391.25745,
        "y": -33.40358
    },
    {
        "x": -1347.75696,
        "y": -517.62527
    },
    {
        "x": -1330.46989,
        "y": -629.03869
    },
    {
        "x": 505.8375,
        "y": 142.95573
    },
    {
        "x": 523.5712,
        "y": 106.08348
    },
    {
        "x": -51.09127,
        "y": -181.14621
    },
    {
        "x": -293.34542,
        "y": -316.24493
    },
    {
        "x": -986.84478,
        "y": -735.49297
    },
    {
        "x": 1152.31438,
        "y": -1571.2403
    },
    {
        "x": 1174.35498,
        "y": -1514.22251
    },
    {
        "x": 1205.87868,
        "y": -1465.9636
    },
    {
        "x": 1269.6953,
        "y": -1394.92222
    },
    {
        "x": 1280.79083,
        "y": -1382.51421
    },
    {
        "x": 1327.42112,
        "y": -1349.42832
    },
    {
        "x": 1344.64559,
        "y": -1342.44225
    },
    {
        "x": 1354.66438,
        "y": -1338.52724
    },
    {
        "x": 1723.13612,
        "y": -1203.28421
    },
    {
        "x": 1988.0821,
        "y": -1109.64478
    },
    {
        "x": 2026.15564,
        "y": -1097.85941
    },
    {
        "x": 2042.30321,
        "y": -1093.86146
    },
    {
        "x": 2050.70531,
        "y": -1093.14293
    },
    {
        "x": 2089.66516,
        "y": -1087.47264
    },
    {
        "x": 2114.14786,
        "y": -1084.60985
    },
    {
        "x": 2160.64767,
        "y": -1086.00042
    },
    {
        "x": 2204.09704,
        "y": -1096.538
    },
    {
        "x": 2255.65809,
        "y": -1113.62178
    },
    {
        "x": 1136.30555,
        "y": -1567.54248
    },
    {
        "x": 1172.49265,
        "y": -1501.01671
    },
    {
        "x": 1207.0383,
        "y": -1451.36951
    },
    {
        "x": 1274.59713,
        "y": -1376.0946
    },
    {
        "x": 1314.3804,
        "y": -1347.79975
    },
    {
        "x": 1331.63959,
        "y": -1337.76387
    },
    {
        "x": 1359.68527,
        "y": -1327.49739
    },
    {
        "x": 1727.53231,
        "y": -1192.59433
    },
    {
        "x": 1999.71526,
        "y": -1097.07715
    },
    {
        "x": 2029.43226,
        "y": -1088.41185
    },
    {
        "x": 2050.024,
        "y": -1082.29383
    },
    {
        "x": 2088.81733,
        "y": -1074.60827
    },
    {
        "x": 2113.30003,
        "y": -1071.74548
    },
    {
        "x": 2159.79984,
        "y": -1073.13605
    },
    {
        "x": 2203.24921,
        "y": -1083.67363
    },
    {
        "x": 2254.81026,
        "y": -1100.75741
    }
];


export class Road extends Sequence {
    constructor() {
        super();

        var points = pts.map(v => new Vector3(v.x, 0, v.y))
       
        var geo = new Geometry();
        geo.vertices.push(...points);

        var map = Assets.Texture("./assets/model/city/traffic_01.png");
        map.repeat.y = 2
        map.wrapS = RepeatWrapping;
        map.wrapT = RepeatWrapping;
        var material = new LineBasicMaterial({
            color: 0xff0000,
            // transparent: true,
            // map,
            // opacity: 1,
            // side: DoubleSide
        });

        this.renderObject = new Line(geo, material);
    }
    update(deltaTime) {
        super.update(deltaTime);
        // this.renderObject.material.map.offset.y += deltaTime.delta
    }
}
