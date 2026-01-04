// Mock prediction service - in a real app, this would make API calls to ML models

export const predictService = {
  async predictYield(formData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock prediction logic based on input data
    const baseYield = 2.5 // tons per acre
    const cropMultiplier = {
      'wheat': 1.0,
      'rice': 1.2,
      'corn': 1.5,
      'soybean': 1.1
    }

    const soilMultiplier = {
      'clay': 0.9,
      'sandy': 1.1,
      'loam': 1.0
    }

    const seasonMultiplier = {
      'kharif': 1.0,
      'rabi': 0.8
    }

    const cropType = formData.cropType.toLowerCase()
    const soilType = formData.soilType.toLowerCase()
    const season = formData.season.toLowerCase()

    const multiplier = (cropMultiplier[cropType] || 1.0) *
                      (soilMultiplier[soilType] || 1.0) *
                      (seasonMultiplier[season] || 1.0)

    const predictedYield = baseYield * multiplier * (0.8 + Math.random() * 0.4) // Add some randomness
    const confidence = Math.floor(85 + Math.random() * 10) // 85-95% confidence

    return {
      yield: predictedYield.toFixed(2),
      confidence: confidence
    }
  }
}
