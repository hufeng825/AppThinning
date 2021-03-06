class AppthinningError extends Error {
    constructor(code, message) {
      super(message)
      this.code = code
    }
}

class ProjectParamError extends AppthinningError {
  constructor() {
    super(1, "Project directory does not specified.") 
  }
}

class ProjectNotExistError extends AppthinningError {
  constructor() {
    super(2, "Project directory does not exist.") 
  }
}

class IgnoreError extends AppthinningError {
  constructor(err) {
    super(3, err.message) 
  }
}

class SvgoError extends AppthinningError {
  constructor(err) {
    super(4, err.message) 
  }
}

class TinyPngError extends AppthinningError {
  constructor(err) {
    super(5, err.message) 
  }
}

class TinyPngValidateError extends AppthinningError {
  constructor() {
    super(6, "tinyPng validate error. Please check tinyPng's key, you can get it from https://tinypng.com/developers")
  }
}

class ImageOptimError extends AppthinningError {
  constructor(err) {
    super(7, err.message) 
  }
}

class ImageOptimNotInstalledError extends AppthinningError {
  constructor() {
    super(8, "ImageOptim.app is not installed, you can get it from https://imageoptim.com/mac") 
  }
}

class NoFilesNeedError extends AppthinningError {
  constructor() {
    super(9, "No files need to be processed.") 
  }
}

module.exports = {
  AppthinningError,
  ProjectParamError,
  ProjectNotExistError,
  IgnoreError,
  SvgoError,
  TinyPngError,
  TinyPngValidateError,
  ImageOptimError,
  ImageOptimNotInstalledError,
  NoFilesNeedError
}