﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "Não foi possível criar mapa",
    "zoomInTooltip": "Aumentar Zoom",
    "zoomOutTooltip": "Reduzir zoom",
    "geolocationTooltip": "Localização atual"
  },
  "main": {
    "noGroup": "Nenhum grupo configurado",
    "submitReportButtonText": "Submeter um Relatório",
    "gotoListViewTooltip": "Vista de Lista",
    "noFeatureGeomtery": "Elemento não pode ser exibido",
    "featureOutsideAOIMessage": "O elemento não pode ser adicionado fora da área de estudo",
    "noEditingPermissionsMessage": "ã_You do not have permission to perform this action________________Ç."
  },
  "signin": {
    "guestSigninText": "Prosseguir como Convidado",
    "signInOrText": "Ou",
    "signinOptionsText": "Iniciar sessão com:",
    "noGroupNameText": "Por favor inicie sessão",
    "guestLoginTooltip": "Iniciar sessão como convidado",
    "facebookLoginTooltip": "Iniciar sessão com Facebook",
    "twitterLoginTooltip": "Iniciar sessão com Twitter",
    "googlePlusLoginTooltip": "Iniciar sessão com Google+",
    "agolLoginTooltip": "Iniciar sessão com ArcGIS"
  },
  "webMapList": {
    "owner": "Proprietário",
    "created": "Data criada",
    "modified": "Data de modificação",
    "description": "Descrição",
    "snippet": "Resumo",
    "licenseInfo": "Restrições de utilização e acesso",
    "accessInformation": "Créditos",
    "tags": "Palavras-chave",
    "numViews": "Número de visualizações",
    "avgRating": "Avaliação",
    "noWebMapInGroup": "Grupo configurado é inválido ou itens não foram partilhados com este grupo.",
    "infoBtnToolTip": "Informação de mapa"
  },
  "issueWall": {
    "noResultsFound": "Não foram encontrados elementos",
    "noResultsFoundInCurrentBuffer": "Não foram encontrados elementos perto de si",
    "unableToFetchFeatureError": "Não é possível completar a operação",
    "gotoWebmapListTooltip": "Ir para a lista principal",
    "gotoMapViewTooltip": "Vista de mapa"
  },
  "appHeader": {
    "myReport": "ã_My Submissions_____Ç",
    "signIn": "Iniciar sessão",
    "signOut": "Terminar sessão",
    "signInTooltip": "Iniciar sessão",
    "signOutTooltip": "Terminar Sessão",
    "myReportTooltip": "ã_View my submissions_______Ç"
  },
  "geoform": {
    "enterInformation": "Detalhes",
    "selectAttachments": "Anexos",
    "selectFileText": "Procurar",
    "enterLocation": "Local",
    "reportItButton": "Reportar",
    "editReportButton": "Atualizar",
    "cancelButton": "Cancelar",
    "requiredField": "(exigido)",
    "selectDefaultText": "Select&hellip;",
    "invalidInputValue": "Por favor, introduza um valor válido.",
    "noFieldsConfiguredMessage": "Campos de camada não são configuraveis para capturar dados",
    "invalidSmallNumber": "Por favor introduza um número inteiro",
    "invalidNumber": "Por favor introduza um número inteiro",
    "invalidFloat": "Por favor introduza um número",
    "invalidDouble": "Por favor introduza um número",
    "requiredFields": "Por favor forneça valores para todos os campos solicitados",
    "selectLocation": "Por favor seleccione uma localização para o seu relatório",
    "numericRangeHintMessage": "${openStrong}Hint:${closeStrong} valor Mínimo ${minValue} e valor Máximo ${maxValue}",
    "dateRangeHintMessage": "${openStrong}Hint:${closeStrong} Data Mínima ${minValue} e Data Máxima ${maxValue}",
    "errorsInApplyEdits": "ã_Values could not be submitted__________Ç.",
    "attachmentSelectedMsg": "anexo(s) seleccionado(s)",
    "attachmentUploadStatus": "${failed} do ${total} anexo(s) falhou a carregar",
    "geoLocationError": "Localização actual não disponível",
    "geoLocationOutOfExtent": "Localização actual está fora da extensão de mapa",
    "submitButtonTooltip": "Submeter",
    "cancelButtonTooltip": "Cancelar",
    "geoformBackButtonTooltip": "ã_Return to the list______Ç",
    "locationSelectionHintForPointLayer": "ã_Tap the map to draw the location___________Ç.",
    "locationSelectionHintForPolygonLayer": "ã_Tap the map to draw the location. Double tap to complete the drawing______________________Ç.",
    "locationSelectionHintForPointLayerDesktop": "ã_Click the map to draw the location____________Ç.",
    "locationSelectionHintForPolygonLayerDesktop": "ã_Click the map to draw the location. Double click to complete the drawing_______________________Ç."
  },
  "locator": {
    "addressText": "Endereço:",
    "usngText": "USNG",
    "mgrsText": "MGRS",
    "latLongText": "Latitude/Longitude",
    "invalidSearch": "Nenhum resultado encontrado",
    "locatorPlaceholder": "Introduza um endereço de pesquisa",
    "locationOutOfExtent": "ã_Location is outside the submission area_____________Ç",
    "searchButtonTooltip": "Pesquisar",
    "clearButtonTooltip": "Limpar valor de pesquisa"
  },
  "myIssues": {
    "title": "ã_My Submissions_____Ç",
    "myIssuesTooltip": "ã_My Submissions_____Ç",
    "noResultsFound": "ã_No submissions found_______Ç"
  },
  "itemDetails": {
    "likeButtonLabel": "",
    "likeButtonTooltip": "Concordo",
    "commentButtonLabel": "",
    "commentButtonTooltip": "Deixar uma resposta",
    "galleryButtonLabel": "",
    "galleryButtonTooltip": "Ver documentos anexados",
    "mapButtonLabel": "Ver no mapa",
    "mapButtonTooltip": "ã_View the location of this submission____________Ç",
    "commentsListHeading": "Comentários",
    "unableToUpdateVoteField": "Não é possível contar o seu voto neste momento.",
    "gotoIssueListTooltip": "ã_View the list of submissions_________Ç",
    "deleteMessage": "Tem certeza de que pretende eliminar?"
  },
  "itemList": {
    "likesForThisItemTooltip": "ã_Number of votes______Ç",
    "loadMoreButtonText": "Carregar mais..."
  },
  "comment": {
    "commentsFormHeading": "Comentário",
    "commentsFormSubmitButton": "Submeter Comentário",
    "commentsFormEditButton": "Atualizar Comentário",
    "commentsFormCancelButton": "Cancelar",
    "errorInSubmittingComment": "Comentário não pode ser submetido",
    "emptyCommentMessage": "Por favor introduza um comentário.",
    "placeHolderText": "Escreva um comentário",
    "noCommentsAvailableText": "Não existem comentários disponíveis",
    "remainingTextCount": "${0} caractere(s) mantem-se",
    "showNoText": "Não",
    "selectAttachments": "Anexos",
    "selectFileText": "Procurar",
    "attachmentSelectedMsg": "anexo(s) seleccionado(s)",
    "attachmentHeaderText": "Anexos",
    "unknownCommentAttachment": "FICHEIRO",
    "editRecordText": "Editar",
    "deleteRecordText": "Excluir",
    "deleteCommentFailedMessage": "Não é possível eliminar o comentário"
  },
  "gallery": {
    "galleryHeaderText": "Galeria",
    "noAttachmentsAvailableText": "Não foram encontrados anexos"
  }
});