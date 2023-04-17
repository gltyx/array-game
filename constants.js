const arrayColours = ["#00f", "#80f", "#f0f", "#f08", "#f00", "#f80"]
const titleNames = ["Today Game", "Astray Game", "Convey Game", "Decay Game", "Dismay Game", "Delay Game", "Repay Game", "Obey Game", "Away Game", "Display Game", "Hooray Game", "Betray Game"]
const AGeneratorCostBases = [10, 100, 1000, 100000, 1e7]
const AGeneratorCostExponents = [1.2, 1.3, 1.4, 1.5, 1.6]
const AUpgradeCostBases = [1e6, 1e8, 1e80]
const AUpgradeCostExponents = [10, 100, 1e10]
const BGeneratorCostBases = [10, 100, 1000, 10000, 100000]
const BGeneratorCostExponents = [1.2, 1.3, 1.4, 1.5, 1.6]
const BUpgradeCostBases = [1e80]
const BUpgradeCostExponents = [1e10]
const CGeneratorCostBases = [10, 100, 1000, 10000, 100000]
const CGeneratorCostExponents = [1.2, 1.3, 1.4, 1.5, 1.6]
const CMilestones = [1, 3, 5, 8, 10, 20, 30, 50, 100, 300, 10000, 30000, 100000, 1e6]
const challengeGoals = [
["1e25", "1e50", "1e75", "1e90", "1e110", "1e130"],
["1e80", "1e100", "1e120", "1e140", "1e160", "1e180"],
["1e175", "1e225", "1e275", "1e325", "1e375", "1e425"],
["1e80", "1e100", "1e120", "1e135", "1e150", "1e165"]]