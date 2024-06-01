var gingernutMap = document.getElementById("gingernutMap");

var vicButton = document.getElementById("vicButton");
vicButton.onchange = function () {
  if (vicButton.checked) gingernutMap.classList.remove("vic-hidden");
  else gingernutMap.classList.add("vic-hidden");
};

var nswButton = document.getElementById("nswButton");
nswButton.onchange = function () {
  if (nswButton.checked) gingernutMap.classList.remove("nsw-hidden");
  else gingernutMap.classList.add("nsw-hidden");
};

var qldButton = document.getElementById("qldButton");
qldButton.onchange = function () {
  if (qldButton.checked) gingernutMap.classList.remove("qld-hidden");
  else gingernutMap.classList.add("qld-hidden");
};

var saButton = document.getElementById("saButton");
saButton.onchange = function () {
  if (saButton.checked) gingernutMap.classList.remove("sa-hidden");
  else gingernutMap.classList.add("sa-hidden");
};

var savoyMap = document.getElementById("savoyMap");

var savoyOrgButton = document.getElementById("savoyOrgButton");
savoyOrgButton.onchange = function () {
  if (savoyOrgButton.checked) savoyMap.classList.remove("savoy-org-hidden");
  else savoyMap.classList.add("savoy-org-hidden");
};

var savoyCpButton = document.getElementById("savoyCpButton");
savoyCpButton.onchange = function () {
  if (savoyCpButton.checked) savoyMap.classList.remove("savoy-cp-hidden");
  else savoyMap.classList.add("savoy-cp-hidden");
};

var savoyGfButton = document.getElementById("savoyGfButton");
savoyGfButton.onchange = function () {
  if (savoyGfButton.checked) savoyMap.classList.remove("savoy-gf-hidden");
  else savoyMap.classList.add("savoy-gf-hidden");
};

var jatzOrgButton = document.getElementById("jatzOrgButton");
jatzOrgButton.onchange = function () {
  if (jatzOrgButton.checked) savoyMap.classList.remove("jatz-org-hidden");
  else savoyMap.classList.add("jatz-org-hidden");
};

var jatzCpButton = document.getElementById("jatzCpButton");
jatzCpButton.onchange = function () {
  if (jatzCpButton.checked) savoyMap.classList.remove("jatz-cp-hidden");
  else savoyMap.classList.add("jatz-cp-hidden");
};

var jatzGfButton = document.getElementById("jatzGfButton");
jatzGfButton.onchange = function () {
  if (jatzGfButton.checked) savoyMap.classList.remove("jatz-gf-hidden");
  else savoyMap.classList.add("jatz-gf-hidden");
};
