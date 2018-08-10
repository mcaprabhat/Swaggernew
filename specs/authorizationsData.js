var authorizations = {
        authorizations: [
			{attribute  :   "vwCrtOrdQuo",  	  visible: true},
            {attribute  :   "crtOrdr",      visible: true}, // viewProducts
            {attribute	:	"vwAvlb",       visible: true}, // viewProducts
            {attribute	:	"vwVwPrdcts",   visible: true}, // viewProducts
            {attribute	:	"vwRlldt",      visible: true}, // viewProducts
            {attribute	:	"vwTtlPrc",     visible: true}, // viewProducts
            {attribute  :   "vwPrdctsDscRslt",    visible: true}, // viewProducts
            {attribute  :   "vwPrdctsMultiSel",    visible: true},  // viewProducts
            {attribute  :   "vwPrdtsDiv",    visible: true}, // viewProducts - showDivision
            {attribute  :   "vwPrdtsHrchFr",    visible: true}, // viewProducts - showHierarchyFour
            {attribute  :   "vwPrdtsFromLoc",    visible: true}, // viewProducts - showHierarchyFour
            {attribute  :   "vwPrdctsSizes",    visible: true}, // viewProducts - showHierarchyFour
            {attribute  :   "vwPrdtsShpSiz",    visible: true}, // viewProducts - showHierarchyFour
            {attribute  :   "vwPrdctToolBarCstProd",    visible: true},//vwPrdctToolBarNewProd
            {attribute  :   "vwPrdctToolBarNewProd",    visible: true},
            {attribute  :   "vwPrdctFilter",    visible: true},
            {attribute  :   "vwPrdtsGrade",    visible: true},
            {attribute  :   "vwPrdtsLength",    visible: true},//vwPrdtsCstmrPrtNmbr
            {attribute  :   "vwPrdtsFnshngChrctrstcs",    visible: true},
            {attribute  :   "vwPrdtsCstmrPrtNmbr",    visible: true},
            {attribute  :   "vwPrdtsFrmLctnSrch",    visible: true},
            {attribute  :   "vwPrdtsAvlb",    visible: true},
            {attribute  :   "vwPrdtsFstRlldt",    visible: true},
            {attribute  :   "vwPrdtsFstCloDt",    visible: true},
            {attribute  :   "vwPrdtsScdRlldt",    visible: true},
            {attribute  :   "vwPrdtsScdCloDt",    visible: true},
            {attribute  :   "vwPrdctStdPcCont",    visible: true},
            {attribute  :   "vwPrdctsFBMllPrc",    visible: true},
            {attribute  :   "vwPrdtsWghtFt",    visible: true},
            {attribute  :   "vwPrdctsOrdHist",    visible: true},
            {attribute  :   "vwPrdctStdBldWht",    visible: true},
            {attribute  :   "vwPrdctSwCut",    visible: true},//vwPrdctsPeruPrc
            {attribute  :   "vwPrdctsPeruPrc",    visible: true},


            //vwPrdctSwCut

            //vwPrdctsFBMllPrc

            //vwPrdctStdPcCont
            //vwPrdtsFrmLctnSrch
            //vwPrdtsAvlb


            {attribute  :   "vwFrmLctnSrch",    visible: true}, // viewProducts, viewOrders, viewShipments form location box
            {attribute  :   "vwFrmLctnRslt",    visible: true}, // viewProducts, viewOrders
            {attribute  :   "vwShpBL",         visible: true},
            {attribute  :   "vwBndl",       visible: true},
            {attribute  :   "vwCntct",      visible: true}, // viewShipments, viewOrders
            {attribute  :   "vwCWTPrc",     visible: true}, // viewOrders
            {attribute  :   "vwVwOrdrs",    visible: true}, // viewOrders
            {attribute  :   "vwDlvryMthd",  visible: true},
            {attribute  :   "vwFBMllPrc",   visible: true},
            {attribute  :   "vwFwdAgnt",    visible: true},
            {attribute  :   "vwShpHtCrt",      visible: true},
            {attribute  :   "vwInctrm",     visible: true},
            {attribute  :   "vwShpInvc",       visible: true},
            {attribute  :   "vwShpTotPrcWoTx",       visible: true},
            {attribute  :   "vwPlnt",       visible: true},
            {attribute  :   "vwPlntVwStmts", visible: true},
            {attribute  :   "vwPlntVwPrdcts", visible: true},
            {attribute  :   "vwPlntVwShpCrt", visible: true},
            {attribute  :   "vwPlntVwRvwOrdr", visible: true},
            {attribute  :   "vwPlntVwSbmssnCnf", visible: true},
            {attribute  :   "vwRllSchd",    visible: true},
            {attribute  :   "vwRvwOrdr",    visible: true},
            {attribute  :   "vwSbmssnCnf",  visible: true},
            {attribute  :   "vwShpCrt",     visible: true},
            {attribute  :   "vwShpGrp",     visible: true},
            {attribute  :   "vwUntPrc",     visible: true},
            {attribute  :   "vwVwShpmts",   visible: true},
            {attribute  :   "vwActlDlvryDtCol",     visible: true},
            {attribute  :   "vwShpmtsMultiSel",    visible: true},
            // Added by Gastao on Aug-4
            {attribute  :   "vwOrdsMultiSel",    visible: true},    // viewOrders products box
            {attribute  :   "vwWghtFtRlsd",    visible: true},    // viewOrders - wtft
            {attribute  :   "vwStndrdBndlWght",    visible: true},    // viewOrders
            {attribute  :   "vwShppngCndtn",    visible: true},    // viewOrders
            {attribute  :   "vwOpnQnttyFrmStck",    visible: true},    // viewOrders
            {attribute  :   "vwOpnQnttyFrmRllng",    visible: true},    // viewOrders
            {attribute  :   "vwCnfrmtnDt",    visible: true},    // viewOrders
            {attribute  :   "vwPrdctsDscSrch",    visible: true},   // viewProducts
            {attribute  :   "vwStaus",    visible: true},
            {attribute  :   "vwXpctdDlvryDt",    visible: true},   // shipments
            {attribute  :   "vwCnfrmdDt",    visible: true},       // viewOrders
            {attribute  :   "vwCnfrmdQntty",    visible: true},    // viewOrders
            {attribute  :   "vwShpVhcl",    visible: true},
            {attribute  :   "vwGrd",    visible: true},    // viewProducts, viewOrders
            {attribute  :   "vwLngth",    visible: true},  // viewProducts
            {attribute  :   "vwFnshngChrctrstcs",    visible: true},    // viewProducts
            {attribute  :   "vwCstmrPrtNmbr",    visible: true},    // viewProducts
            {attribute  :   "vwShppdQuntty",    visible: true},
            {attribute  :   "vwShppdUOM",    visible: true},
            {attribute  :   "vwShpmtsPrdMultiSel",    visible: true}, // viewShipments products
            {attribute  :   "vwShpFrmLctnSrch",    visible: true}, // viewShipments products
            {attribute  :   "vwShpToDesc",    visible: true}, // viewShipments
            {attribute  :   "vwDlvyPrc",    visible: true}, // shoppingCart
            // Added by Reinaldo Leal on Mar-5
            {attribute  :   "vwNFe",    visible: true}, // viewShipments
            {attribute  :   "vwShpNFe",    visible: true}, // viewShipments
            {attribute  :   "vwTax",    visible: true}, // viewShipments
            {attribute  :   "vwDvsn",    visible: true}, // viewShipments
            {attribute  :   "vwRmito",    visible: true}, // viewShipments
            {attribute  :   "vwFctra",    visible: true}, // viewShipments
            {attribute  :   "vwTotPrice",    visible: true}, // viewShipments
            {attribute  :   "vwUntPric",    visible: true}, // viewShipments
            {attribute  :   "vwUntPricKwoT",    visible: true}, // viewShipments
            {attribute  :   "vwUntPricKwiT",    visible: true}, // viewShipments
            {attribute  :   "vwActualDelDate",    visible: true}, // viewShipments
            {attribute  :   "vwLatam",    visible: false}, 
            // Added by Reinaldo Leal on Mar-16
            {attribute  :   "vwOrdrCntr",    visible: true}, // viewOrders - contract
            {attribute  :   "vwOrdrCntrLnItm",    visible: true}, // viewOrders - contractLineItem
            {attribute  :   "vwOrdrPrgCod",    visible: true}, // viewOrders - programCode
            {attribute  :   "vwOrdrSldToId",    visible: true}, // viewOrders - soldtoId
            {attribute  :   "vwOrdrOrdQtySpc",    visible: true}, // viewOrders - orderedQuantitySpec
            {attribute  :   "vwOrdrOrdQtySpcU",    visible: true}, // viewOrders - orderedQuantitySpecUOM
            {attribute  :   "vwOrdrRmngQty",    visible: true}, // viewOrders - remainingQty
            {attribute  :   "vwOrdrRlseForShpmt",    visible: true}, // viewOrders - releaseForShipmentQty
//            {attribute  :   "vwOrdrUntPrc",    visible: true}, // viewOrders - unitPrice
            {attribute  :   "vwOrdrTotPrcWOutTx",    visible: true}, // viewOrders - totPricWithOutTaxes
            {attribute  :   "vwOrdrTxs",    visible: true}, // viewOrders - taxes
            {attribute  :   "vwOrdrTotPrcWTx",    visible: true}, // viewOrders - totPricWithTaxes
            {attribute  :   "vwOrdrQtyOnDlvry",    visible: true}, // viewOrders - qtyOnDelivery
            {attribute  :   "vwOrdrRmngQtyU",    visible: true}, // viewOrders - remainingQtyUoM
            {attribute  :   "vwOrdrQtyOnShpmtU",    visible: true}, // viewOrders - qtyOnShipmentUoM
            {attribute  :   "vwOrdrEstDateBR",    visible: true}, //viewOrders - estimated date br
            //vwShpShpToDesc
            {attribute  :   "vwShpShpToDesc",    visible: true}, // viewOrders - qtyOnShipmentUoM
            // Added by Reinaldo Leal on Mar-23
            {attribute  :   "vwVwStmts",    visible: true}, // viewStatements
            {attribute  :   "vwSndAdtr",    visible: true}, // viewStatements
            {attribute  :   "vwStmtCntct",      visible: true}, // View Statements Contact info
            {attribute  :   "vwStmtSoldto",    visible: true}, // viewStatements - Soldto
            {attribute  :   "vwStmtPuchOrdr",    visible: true}, // viewStatements - PO
            {attribute  :   "vwStmtSalsOrdr",    visible: true}, // viewStatements - SO
            {attribute  :   "vwStmtCntr",    visible: true}, // viewStatements - contract
            {attribute  :   "vwStmtInvc",    visible: true}, // viewStatements - invoiceNumber
            {attribute  :   "vwStmtRefncNO",    visible: true}, // viewStatements - referenceNO
            {attribute  :   "vwStmtAssgnmNO",    visible: true}, // viewStatements - assignmentNO
            {attribute  :   "vwStmtFctra",    visible: true}, // viewStatements - facturaNumber
            {attribute  :   "vwStmtRmito",    visible: true}, // viewStatements - remitoNumber
            {attribute  :   "vwStmtBL",    visible: true}, // viewStatements - bolNumber
            {attribute  :   "vwStmtDcmntTp",    visible: true}, // viewStatements - documentType
            {attribute  :   "vwStmtNFe",    visible: true}, // viewStatements - nfeNumber
            {attribute  :   "vwStmtAcssKey",    visible: true}, // viewStatements - accesskey
            {attribute  :   "vwStmtDcmntDt",    visible: true}, // viewStatements - documentDate
            {attribute  :   "vwStmtDueDt",    visible: true}, // viewStatements - dueDate
            {attribute  :   "vwStmtDysDue",    visible: true}, // viewStatements - daysDue
            {attribute  :   "vwStmtCurr",    visible: true}, // viewStatements - currency
            {attribute  :   "vwStmtOrgnAmnt",    visible: true}, // viewStatements - originalAmount
            {attribute  :   "vwStmtOpenAmnt",    visible: true}, // viewStatements - openAmount
            {attribute  :   "vwStmtSts",    visible: true}, // viewStatements - status
            {attribute  :   "vwStmtBlt",    visible: true}, // viewStatements - boletoNumber
            {attribute  :   "vwStmtCpjGedu",    visible: true}, // viewStatements - cnpjGerdauID
            {attribute  :   "vwStmtCpjCstm",    visible: true}, // viewStatements - cnpjCustomerID
            {attribute  :   "vwStmtBknId",    visible: true}, // viewStatements - bankID
            {attribute  :   "vwStmtBknBrch",    visible: true}, // viewStatements - bankBranchID
            {attribute  :   "vwStmtBnkLnk",    visible: true}, // viewStatements - bankLink
            // Added by Reinaldo Leal on Mar-25
            {attribute  :   "vwStmtAsOfDate",    visible: true}, // viewStatements - As Of Date
            {attribute  :   "vwStmtAllOpnItms",    visible: true}, // viewStatements - All Open Items Tab
            {attribute  :   "vwStmtSrcAllInvDts",    visible: true}, // viewStatements - Search all invoices / debits Tab
            {attribute  :   "vwStmtSrcAllPmtsCts",    visible: true}, // viewStatements - Search all payments / credits Tab
            // Added by Fábio Moura on Mar-10
                //vwOrdrUntPrc
            {attribute  :   "vwOrdrUntPrc",    visible: true},
            {attribute  :   "vwTtlPrc",    visible: true},


            {attribute :    "vwResCentExpPrc",    visible: true}, // viewResolutionCenter - Expected Price Visibility Rule
            // Added by Reinaldo Leal on Apr-27
            {attribute  :   "vwOrdrOrdQty",    visible: true}, // viewOrders - Ordered Qty
            {attribute  :   "vwOrdrReqtdDlvryDt",    visible: true}, // viewOrders - Requested Delivery Date
            {attribute  :   "vwOrdrOpnQty",    visible: true}, // viewOrders - Open Qty
            {attribute  :   "vwOrdrShpmt",    visible: true}, // viewOrders - Shipment #
            {attribute  :   "vwOrdrDlvry",    visible: true}, // viewOrders - Delivery #
            {attribute  :   "vwOrdrDlvryQty",    visible: true}, // viewOrders - Delivery Qty
            {attribute  :   "vwOrdrRlsdShpmtQty",    visible: true}, // viewOrders - Released for shipment Qty 
            {attribute  :   "vwOrdrOpnQtyFrmRllGrTot",    visible: true}, // viewOrders - Open Qty From Rolling Grand Total 
            {attribute  :   "vwOrdrOpnQtyFrmRllSbTot",    visible: true}, // viewOrders - Open Qty From Rolling Sub Total 
            {attribute  :   "vwOrdrOpnQtyFrmStkGrTot",    visible: true}, // viewOrders - Open Qty From Stock Grand Total 
            {attribute  :   "vwOrdrOpnQtyFrmStkSbTot",    visible: true}, // viewOrders - Open Qty From Stock Sub Total 
            {attribute  :   "vwOrdrEstmtDlvryDt",    visible: true}, // viewOrders - Estimated Delivery Date 
            {attribute  :   "vwOrdrSts",    visible: true}, // viewOrders - Status
            {attribute  :   "vwOrdDiv",    visible: true}, // viewOrders - showDivision
            {attribute  :   "vwOrdShpQty",    visible: true}, // viewOrders - shipped qty
            {attribute  :   "vwVwOrdBldShi",    visible: true}, // viewOrders - build shipments mode
            {attribute  :   "vwOrdXpctdDlvryDt",    visible: true}, // viewOrders - Expected Delivery date On Shipment Tab
            {attribute  :   "vwShpDiv",    visible: true}, //viewShipments - showDivision
            // Added by Reinaldo Leal on Mai-14

            {attribute  :   "vwShpGrd",    visible: true}, //viewShipments - Grade
            {attribute  :   "vwShpLgt",    visible: true}, //viewShipments - Length
            {attribute  :   "vwShpFChar",    visible: true}, //viewShipments - Finishing Characteristics 
            {attribute  :   "vwShpCutPart",    visible: true}, //viewShipments - Customer part# 
            {attribute  :   "vwShpTotPrc",    visible: true}, //viewShipments - Total Price 
            {attribute  :   "vwShpCntr",    visible: true}, //viewShipments - Contract Number  
            {attribute  :   "vwShpToShpCnd",    visible: true}, //viewShipments - Ship To - Shipment Condition  
            {attribute  :   "vwShpFwdAgnt",    visible: true},
            //Complaints
             {attribute  :   "vwComLngth",    visible: true}, //Complaints - Length - OK
            {attribute  :   "vwComGrd",    visible: true}, //Complaints - Grade - OK
            {attribute  :   "vwComPrdDescrip",    visible: true}, // Compaints - Prod Description - OK
            {attribute  :   "vwMcrHdrResltCtr",    visible: true}, // Compaints - page
             {attribute :    "vwComExpPrc",    visible: true}, // viewResolutionCenter - Expected Price Visibility Rule 
            {attribute  :   "vwComNFe",    visible: true}, // Compaints - Nota Fiscal - OK
            {attribute  :   "vwComDenitCredtiMemo",    visible: true}, // Compaints - Debit Credit - OK
            {attribute :    "vwComExpTax",    visible: true}, // viewResolutionCenter - Expected tax Visibility Rule 
            {attribute  :   "vwComBL",    visible: true}, // Compaints - BOL - OK
			// Added by Reinaldo Leal on Mai-20
           
			// CONTRACTS
			//{attribute  :   "vwCntr",             visible: true}, // viewContract - Contract Visibility Rule
            //{attribute  :   "vwCntrTypeBus",      visible: true}, // viewContract - Contract Type Business Rule - NA(true)/LATAM (false)
            {attribute  :   "vwCntrPrd",          visible: true}, // viewContract - Product Visibility Rule
            {attribute  :   "vwCntrFrmLoc",       visible: true}, // viewContract - From Location Visibility Rule
            {attribute  :   "vwCntrDivision",     visible: true}, // viewContract - Division Visibility Rule
            {attribute  :   "vwCntrWeightFoot",   visible: true}, // viewContract - Weight/Foot
            {attribute  :   "vwCntrStndBdl",      visible: true}, // viewContract - Standard Bundle Weight Visibility
            {attribute  :   "vwCntrPrdDescrip",   visible: true}, // viewContract - Product Description Concatenate Visibility Rule - NA(true)/LATAM (false)
            {attribute  :   "vwCntrPrjDescrip",   visible: true}, // viewContract - Project Description Visibility Rule
            {attribute  :   "vwCntrStatusType",   visible: true}, // viewContract - Status 
            {attribute  :   "vwCntrCstmPart",     visible: true}, // viewContract - Customer Part # Visibility Rule         
            {attribute  :   "vwCntrGrdType",      visible: true}, // viewContract - Grid # Visibility quantity(true) or value(false)
            {attribute  :   "vwCntrTotPrice",      visible: true}, //viewContract - total Price with taxes column
            {attribute  :   "vwCntrShipToSrch",   visible: true}, // viewContract - Ship to
            {attribute  :   "vwCntrShipToDesc",   visible: false}, // viewContract - Ship to description - true 
            {attribute  :   "vwCntrGrd",   visible: true}, // viewContract - Grade
            {attribute  :   "vwCntrLgt",   visible: true}, // viewContract - Length
			// Added by Reinaldo Leal on Mai-21
            {attribute  :   "vwShpShpNum",   visible: true},
            {attribute  :   "vwShpNfeSrchRes",   visible: true},
            {attribute  :   "vwShpmtsPlnt",   visible: true},
            {attribute  :   "vwShpVhclRes",    visible: true},
            {attribute  :   "vwShpHtCrtCkb",    visible: true},
            {attribute  :   "vwShpComBL",    visible: true},
            {attribute  :   "vwShpFilter",    visible: true},
            {attribute  :   "vwShpComplaint",    visible: true},
            {attribute  :   "vwPrdtsHrchFr",    visible: true}, // viewProducts - showHierarchyFour
            {attribute  :   "vwPrdctFilter",    visible: true},
            {attribute  :   "vwPrdctsOrdHist",    visible: true}			
        ],
        errors: [{
            severity: "",
            code: "",
            parameters: [
                {
                    Value: ""
                }
            ]
        }]
};

exports.getAuthorizations = function getAuthorizations(page) {
    var output;
    console.log(page);
    if (page=="1"
        ||page=="viewShipments"
        ||page=="viewStatements"
        ||page=="viewOrders"
        ||page=="shopingCart"
        ||page=="ViewContracts"
        ||page=="viewResolutionCenter")
    {
        output = {};
        output.authorizations = authorizations.authorizations;
        output.errors = null;
    }
    return output;
};